'reach 0.1';

const [ isHand, BLCAK, WHITE ] = makeEnum(2);
const [ isOutcome, A_WINS,B_WINS,C_WINS, DRAW] = makeEnum(4);
function winner(handA,handB,handD) {
    if (handA != handB && handA != handD)
    {
        return A_WINS;
    }
    else if((handB != handA && handB != handD))
    {
        return B_WINS;
    }
    else if((handD != handB && handA != handD))
    {
        return C_WINS;
    }
    else return DRAW;
    }

assert(winner(BLCAK, WHITE,WHITE) == A_WINS);
assert(winner(WHITE, BLCAK,BLCAK) == A_WINS);
assert(winner(WHITE, BLCAK,WHITE) == B_WINS);
assert(winner(BLCAK, WHITE,BLCAK) == B_WINS);
assert(winner(BLCAK, BLCAK,WHITE) == C_WINS);
assert(winner(WHITE, WHITE,BLCAK) == C_WINS);
assert(winner(BLCAK, BLCAK,BLCAK) == DRAW);
assert(winner(WHITE, WHITE,WHITE) == DRAW);

// forall(UInt, (handA) =>
//   forall(UInt, (handB) =>
//     forall(UInt,(handD) =>
//       assert(isOutcome(winner(handA,handB,handD))))));
    

// forall(UInt, (hand) =>
//   assert(winner(hand, hand, hand) == DRAW));

const Player =
      { ...hasRandom,
        getHand: Fun([], UInt),
        seeOutcome: Fun([UInt], Null),
        informTimeout: Fun([], Null) };
const Alice =
      { ...Player,
        wager: UInt };
const Bob =
      { ...Player,
        acceptWager: Fun([UInt], Null) };
const David =
      { ...Player,
        acceptWager: Fun([UInt], Null) };

const DEADLINE = 10;
export const main =
  Reach.App(
    {},
    [Participant('Alice', Alice), Participant('Bob', Bob), Participant('David', David)],
    (A, B, D) => {
      const informTimeout = () => {
        each([A, B, D], () => {
          interact.informTimeout(); }); };

      A.only(() => {
        const wager = declassify(interact.wager); });
      A.publish(wager)
        .pay(wager);
      commit();

      B.only(() => {
        interact.acceptWager(wager); });
      B.pay(wager)
        .timeout(DEADLINE, () => closeTo(A, informTimeout));
      commit();
      D.only(() => {
        interact.acceptWager(wager); });
      D.pay(wager)
        .timeout(DEADLINE, () => closeTo(A, informTimeout));

      var outcome = DRAW;
      invariant(balance() == 3 * wager && isOutcome(outcome) );
      while ( outcome == DRAW ) {
        commit();

        A.only(() => {
          const _handA = interact.getHand();
          const [_commitA, _saltA] = makeCommitment(interact, _handA);
          const commitA = declassify(_commitA); });
        A.publish(commitA)
          .timeout(DEADLINE, () => closeTo(B, informTimeout));
        commit();

        unknowable(B, A(_handA, _saltA));
        B.only(() => {
          const handB = declassify(interact.getHand()); });
        B.publish(handB)
          .timeout(DEADLINE, () => closeTo(A, informTimeout));
        commit();

        unknowable(D, A(_handA, _saltA));
        D.only(() => {
          const handD = declassify(interact.getHand()); });
        D.publish(handD)
          .timeout(DEADLINE, () => closeTo(B, informTimeout));
        commit();

        A.only(() => {
          const [saltA, handA] = declassify([_saltA, _handA]); });
        A.publish(saltA, handA)
          .timeout(DEADLINE, () => closeTo(D, informTimeout));
        checkCommitment(commitA, saltA, handA);

        outcome = winner(handA, handB ,handD);
        continue; }

      assert(outcome == A_WINS || outcome == B_WINS ||outcome == C_WINS);
      if(outcome == A_WINS) transfer(3 * wager).to(A);
      else if(outcome == B_WINS) transfer(3 * wager).to(B);
      else transfer(3 * wager).to(D);
      commit();

      each([A, B ,D], () => {
        interact.seeOutcome(outcome); });
      exit(); });
