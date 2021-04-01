// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export async function Alice(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc4, ctc0, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc4, ctc0]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc4, ctc2, ctc0, ctc0, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc4, ctc2, ctc0, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc4, ctc2, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc4, ctc2, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0]);
  
  
  const v127 = await ctc.creationTime();
  const v126 = stdlib.protect(ctc0, interact.wager, null);
  const txn1 = await (ctc.sendrecv('Alice', 1, 1, stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v127, v126], v126, [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc1, [stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, 0), v127]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:66:9:dot', stdlib.UInt_max, 0)]);
    const [v131] = txn1.data;
    const v132 = txn1.value;
    const v136 = txn1.time;
    const v130 = txn1.from;
    
    const v133 = stdlib.eq(v132, v131);
    stdlib.assert(v133, {
      at: './index.rsh:66:9:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Alice'
       });
    stdlib.assert(true, {
      at: './index.rsh:66:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
       });
    const v135 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v132);
    sim_r.nextSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:68:15:after expr stmt semicolon', stdlib.UInt_max, 1), v130, v131, v135, v136]);
    sim_r.nextSt_noTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:68:15:after expr stmt semicolon', stdlib.UInt_max, 1), v130, v131, v135]);
    sim_r.isHalt = false;
    
    return sim_r;
     })));
  const [v131] = txn1.data;
  const v132 = txn1.value;
  const v136 = txn1.time;
  const v130 = txn1.from;
  const v133 = stdlib.eq(v132, v131);
  stdlib.assert(v133, {
    at: './index.rsh:66:9:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Alice'
     });
  stdlib.assert(true, {
    at: './index.rsh:66:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
     });
  const v135 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v132);
  const txn2 = await (ctc.recv('Alice', 2, 0, [], false, stdlib.checkedBigNumberify('./index.rsh:54:18:decimal', stdlib.UInt_max, 10)));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv('Alice', 3, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 3), [ctc4, ctc0, ctc0, ctc0], [v130, v131, v135, v136], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 1), v130, v131, v135, v136]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 1), v130, v131, v135]);
      const [] = txn3.data;
      const v402 = txn3.value;
      const v407 = txn3.time;
      const v401 = txn3.from;
      
      const v403 = stdlib.eq(v402, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v403, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:73:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'pay amount correct',
        who: 'Alice'
         });
      const v404 = stdlib.addressEq(v130, v401);
      stdlib.assert(v404, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:73:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
         });
      const v406 = stdlib.add(v135, v402);
      sim_r.txns.push({
        amt: v406,
        to: v130
         });
      sim_r.nextSt = stdlib.digest(ctc7, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
      sim_r.isHalt = true;
      
      return sim_r;
       })));
    const [] = txn3.data;
    const v402 = txn3.value;
    const v407 = txn3.time;
    const v401 = txn3.from;
    const v403 = stdlib.eq(v402, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v403, {
      at: 'reach standard library:68:7:dot',
      fs: ['at ./index.rsh:73:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'pay amount correct',
      who: 'Alice'
       });
    const v404 = stdlib.addressEq(v130, v401);
    stdlib.assert(v404, {
      at: 'reach standard library:68:7:dot',
      fs: ['at ./index.rsh:73:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
       });
    const v406 = stdlib.add(v135, v402);
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:62:33:application',
      fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:73:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
       });
    return;
     }
  else {
    const [] = txn2.data;
    const v140 = txn2.value;
    const v144 = txn2.time;
    const v139 = txn2.from;
    const v141 = stdlib.eq(v140, v131);
    stdlib.assert(v141, {
      at: './index.rsh:72:9:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Alice'
       });
    stdlib.assert(true, {
      at: './index.rsh:72:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
       });
    const v143 = stdlib.add(v135, v140);
    const txn3 = await (ctc.recv('Alice', 4, 0, [], false, stdlib.checkedBigNumberify('./index.rsh:54:18:decimal', stdlib.UInt_max, 10)));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv('Alice', 5, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 4), [ctc4, ctc0, ctc4, ctc0, ctc0], [v130, v131, v139, v143, v144], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 2), v130, v131, v139, v143, v144]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 2), v130, v131, v139, v143]);
        const [] = txn4.data;
        const v380 = txn4.value;
        const v385 = txn4.time;
        const v379 = txn4.from;
        
        const v381 = stdlib.eq(v380, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v381, {
          at: 'reach standard library:68:7:dot',
          fs: ['at ./index.rsh:78:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
          msg: 'pay amount correct',
          who: 'Alice'
           });
        const v382 = stdlib.addressEq(v130, v379);
        stdlib.assert(v382, {
          at: 'reach standard library:68:7:dot',
          fs: ['at ./index.rsh:78:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
           });
        const v384 = stdlib.add(v143, v380);
        sim_r.txns.push({
          amt: v384,
          to: v130
           });
        sim_r.nextSt = stdlib.digest(ctc7, []);
        sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
        sim_r.isHalt = true;
        
        return sim_r;
         })));
      const [] = txn4.data;
      const v380 = txn4.value;
      const v385 = txn4.time;
      const v379 = txn4.from;
      const v381 = stdlib.eq(v380, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v381, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:78:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'pay amount correct',
        who: 'Alice'
         });
      const v382 = stdlib.addressEq(v130, v379);
      stdlib.assert(v382, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:78:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
         });
      const v384 = stdlib.add(v143, v380);
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:62:33:application',
        fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:78:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
         });
      return;
       }
    else {
      const [] = txn3.data;
      const v148 = txn3.value;
      const v152 = txn3.time;
      const v147 = txn3.from;
      const v149 = stdlib.eq(v148, v131);
      stdlib.assert(v149, {
        at: './index.rsh:77:9:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Alice'
         });
      stdlib.assert(true, {
        at: './index.rsh:77:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
         });
      const v151 = stdlib.add(v143, v148);
      let v153 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3);
      let v422 = v151;
      let v423 = v152;
      
      while ((() => {
        const v163 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3));
        
        return v163; })()) {
        const v166 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:86:42:application',
          fs: ['at ./index.rsh:85:15:application call to [unknown function] (defined at: ./index.rsh:85:19:function exp)'],
          msg: 'getHand',
          who: 'Alice'
           });
        const v168 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:60:31:application',
          fs: ['at ./index.rsh:87:52:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:85:15:application call to [unknown function] (defined at: ./index.rsh:85:19:function exp)'],
          msg: 'random',
          who: 'Alice'
           });
        const v169 = stdlib.digest(ctc1, [v168, v166]);
        const txn4 = await (ctc.sendrecv('Alice', 8, 1, stdlib.checkedBigNumberify('./index.rsh:89:11:dot', stdlib.UInt_max, 5), [ctc4, ctc0, ctc4, ctc4, ctc0, ctc0, ctc2], [v130, v131, v139, v147, v422, v423, v169], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc2], true, true, stdlib.checkedBigNumberify('./index.rsh:54:18:decimal', stdlib.UInt_max, 10), (async (txn4) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:89:11:dot', stdlib.UInt_max, 6), v130, v131, v139, v147, v422, v423]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:89:11:dot', stdlib.UInt_max, 6), v130, v131, v139, v147, v422]);
          const [v172] = txn4.data;
          const v173 = txn4.value;
          const v178 = txn4.time;
          const v171 = txn4.from;
          
          const v174 = stdlib.eq(v173, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v174, {
            at: './index.rsh:89:11:dot',
            fs: [],
            msg: 'pay amount correct',
            who: 'Alice'
             });
          const v175 = stdlib.addressEq(v130, v171);
          stdlib.assert(v175, {
            at: './index.rsh:89:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
             });
          const v177 = stdlib.add(v422, v173);
          sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:91:17:after expr stmt semicolon', stdlib.UInt_max, 8), v130, v131, v139, v147, v172, v177, v178]);
          sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:91:17:after expr stmt semicolon', stdlib.UInt_max, 8), v130, v131, v139, v147, v172, v177]);
          sim_r.isHalt = false;
          
          return sim_r;
           })));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.recv('Alice', 9, 0, [], false, false));
          const [] = txn5.data;
          const v328 = txn5.value;
          const v333 = txn5.time;
          const v327 = txn5.from;
          const v329 = stdlib.eq(v328, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v329, {
            at: 'reach standard library:68:7:dot',
            fs: ['at ./index.rsh:90:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
            msg: 'pay amount correct',
            who: 'Alice'
             });
          const v330 = stdlib.addressEq(v139, v327);
          stdlib.assert(v330, {
            at: 'reach standard library:68:7:dot',
            fs: ['at ./index.rsh:90:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
             });
          const v332 = stdlib.add(v422, v328);
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:62:33:application',
            fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:90:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
             });
          return;
           }
        else {
          const [v172] = txn4.data;
          const v173 = txn4.value;
          const v178 = txn4.time;
          const v171 = txn4.from;
          const v174 = stdlib.eq(v173, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v174, {
            at: './index.rsh:89:11:dot',
            fs: [],
            msg: 'pay amount correct',
            who: 'Alice'
             });
          const v175 = stdlib.addressEq(v130, v171);
          stdlib.assert(v175, {
            at: './index.rsh:89:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
             });
          const v177 = stdlib.add(v422, v173);
          const txn5 = await (ctc.recv('Alice', 10, 1, [ctc0], false, stdlib.checkedBigNumberify('./index.rsh:54:18:decimal', stdlib.UInt_max, 10)));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv('Alice', 11, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), [ctc4, ctc0, ctc4, ctc4, ctc2, ctc0, ctc0], [v130, v131, v139, v147, v172, v177, v178], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn6) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 8), v130, v131, v139, v147, v172, v177, v178]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 8), v130, v131, v139, v147, v172, v177]);
              const [] = txn6.data;
              const v306 = txn6.value;
              const v311 = txn6.time;
              const v305 = txn6.from;
              
              const v307 = stdlib.eq(v306, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v307, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:97:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                msg: 'pay amount correct',
                who: 'Alice'
                 });
              const v308 = stdlib.addressEq(v130, v305);
              stdlib.assert(v308, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:97:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                 });
              const v310 = stdlib.add(v177, v306);
              sim_r.txns.push({
                amt: v310,
                to: v130
                 });
              sim_r.nextSt = stdlib.digest(ctc7, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
              sim_r.isHalt = true;
              
              return sim_r;
               })));
            const [] = txn6.data;
            const v306 = txn6.value;
            const v311 = txn6.time;
            const v305 = txn6.from;
            const v307 = stdlib.eq(v306, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v307, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:97:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'pay amount correct',
              who: 'Alice'
               });
            const v308 = stdlib.addressEq(v130, v305);
            stdlib.assert(v308, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:97:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
               });
            const v310 = stdlib.add(v177, v306);
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:62:33:application',
              fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:97:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
               });
            return;
             }
          else {
            const [v183] = txn5.data;
            const v184 = txn5.value;
            const v189 = txn5.time;
            const v182 = txn5.from;
            const v185 = stdlib.eq(v184, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v185, {
              at: './index.rsh:96:11:dot',
              fs: [],
              msg: 'pay amount correct',
              who: 'Alice'
               });
            const v186 = stdlib.addressEq(v139, v182);
            stdlib.assert(v186, {
              at: './index.rsh:96:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
               });
            const v188 = stdlib.add(v177, v184);
            const txn6 = await (ctc.recv('Alice', 12, 1, [ctc0], false, stdlib.checkedBigNumberify('./index.rsh:54:18:decimal', stdlib.UInt_max, 10)));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.recv('Alice', 13, 0, [], false, false));
              const [] = txn7.data;
              const v284 = txn7.value;
              const v289 = txn7.time;
              const v283 = txn7.from;
              const v285 = stdlib.eq(v284, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v285, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:104:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                msg: 'pay amount correct',
                who: 'Alice'
                 });
              const v286 = stdlib.addressEq(v139, v283);
              stdlib.assert(v286, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:104:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                 });
              const v288 = stdlib.add(v188, v284);
              ;
              stdlib.protect(ctc3, await interact.informTimeout(), {
                at: './index.rsh:62:33:application',
                fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:104:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                 });
              return;
               }
            else {
              const [v194] = txn6.data;
              const v195 = txn6.value;
              const v200 = txn6.time;
              const v193 = txn6.from;
              const v196 = stdlib.eq(v195, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v196, {
                at: './index.rsh:103:11:dot',
                fs: [],
                msg: 'pay amount correct',
                who: 'Alice'
                 });
              const v197 = stdlib.addressEq(v147, v193);
              stdlib.assert(v197, {
                at: './index.rsh:103:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                 });
              const v199 = stdlib.add(v188, v195);
              const txn7 = await (ctc.sendrecv('Alice', 14, 2, stdlib.checkedBigNumberify('./index.rsh:109:11:dot', stdlib.UInt_max, 8), [ctc4, ctc0, ctc4, ctc4, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0], [v130, v131, v139, v147, v172, v183, v194, v199, v200, v168, v166], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0, ctc0], true, true, stdlib.checkedBigNumberify('./index.rsh:54:18:decimal', stdlib.UInt_max, 10), (async (txn7) => {
                const sim_r = { txns: [] };
                sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:109:11:dot', stdlib.UInt_max, 12), v130, v131, v139, v147, v172, v183, v194, v199, v200]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:109:11:dot', stdlib.UInt_max, 12), v130, v131, v139, v147, v172, v183, v194, v199]);
                const [v204, v205] = txn7.data;
                const v206 = txn7.value;
                const v211 = txn7.time;
                const v203 = txn7.from;
                
                const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v207, {
                  at: './index.rsh:109:11:dot',
                  fs: [],
                  msg: 'pay amount correct',
                  who: 'Alice'
                   });
                const v208 = stdlib.addressEq(v130, v203);
                stdlib.assert(v208, {
                  at: './index.rsh:109:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Alice'
                   });
                const v210 = stdlib.add(v199, v206);
                const v213 = stdlib.digest(ctc1, [v204, v205]);
                const v214 = stdlib.eq(v172, v213);
                stdlib.assert(v214, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:111:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                  msg: null,
                  who: 'Alice'
                   });
                let v216;
                const v218 = stdlib.eq(v205, v183);
                const v220 = v218 ? false : true;
                const v224 = stdlib.eq(v205, v194);
                const v226 = v224 ? false : true;
                const v229 = v220 ? v226 : false;
                if (v229) {
                  v216 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                   }
                else {
                  const v232 = stdlib.eq(v183, v205);
                  const v234 = v232 ? false : true;
                  const v238 = stdlib.eq(v183, v194);
                  const v240 = v238 ? false : true;
                  const v243 = v234 ? v240 : false;
                  if (v243) {
                    v216 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                     }
                  else {
                    const v246 = stdlib.eq(v194, v183);
                    const v248 = v246 ? false : true;
                    const v257 = v248 ? v226 : false;
                    if (v257) {
                      v216 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                       }
                    else {
                      v216 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3);
                       }
                     }
                   }
                const cv153 = v216;
                const cv422 = v210;
                const cv423 = v211;
                
                (() => {
                  const v153 = cv153;
                  const v422 = cv422;
                  const v423 = cv423;
                  
                  if ((() => {
                    const v163 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3));
                    
                    return v163; })()) {
                    sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:83:17:after expr stmt semicolon', stdlib.UInt_max, 6), v130, v131, v139, v147, v422, v423]);
                    sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:83:17:after expr stmt semicolon', stdlib.UInt_max, 6), v130, v131, v139, v147, v422]);
                    sim_r.isHalt = false;
                     }
                  else {
                    const v348 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
                    const v349 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                    if (v348) {
                      const v354 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:117:38:decimal', stdlib.UInt_max, 3), v131);
                      sim_r.txns.push({
                        amt: v354,
                        to: v130
                         });
                      sim_r.nextSt = stdlib.digest(ctc7, []);
                      sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
                      sim_r.isHalt = true;
                       }
                    else {
                      if (v349) {
                        const v360 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:118:43:decimal', stdlib.UInt_max, 3), v131);
                        sim_r.txns.push({
                          amt: v360,
                          to: v139
                           });
                        sim_r.nextSt = stdlib.digest(ctc7, []);
                        sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
                        sim_r.isHalt = true;
                         }
                      else {
                        const v365 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:119:21:decimal', stdlib.UInt_max, 3), v131);
                        sim_r.txns.push({
                          amt: v365,
                          to: v147
                           });
                        sim_r.nextSt = stdlib.digest(ctc7, []);
                        sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
                        sim_r.isHalt = true;
                         } } } })();
                return sim_r;
                 })));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.recv('Alice', 15, 0, [], false, false));
                const [] = txn8.data;
                const v262 = txn8.value;
                const v267 = txn8.time;
                const v261 = txn8.from;
                const v263 = stdlib.eq(v262, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v263, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:110:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Alice'
                   });
                const v264 = stdlib.addressEq(v147, v261);
                stdlib.assert(v264, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:110:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                   });
                const v266 = stdlib.add(v199, v262);
                ;
                stdlib.protect(ctc3, await interact.informTimeout(), {
                  at: './index.rsh:62:33:application',
                  fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:110:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Alice'
                   });
                return;
                 }
              else {
                const [v204, v205] = txn7.data;
                const v206 = txn7.value;
                const v211 = txn7.time;
                const v203 = txn7.from;
                const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v207, {
                  at: './index.rsh:109:11:dot',
                  fs: [],
                  msg: 'pay amount correct',
                  who: 'Alice'
                   });
                const v208 = stdlib.addressEq(v130, v203);
                stdlib.assert(v208, {
                  at: './index.rsh:109:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Alice'
                   });
                const v210 = stdlib.add(v199, v206);
                const v213 = stdlib.digest(ctc1, [v204, v205]);
                const v214 = stdlib.eq(v172, v213);
                stdlib.assert(v214, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:111:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                  msg: null,
                  who: 'Alice'
                   });
                let v216;
                const v218 = stdlib.eq(v205, v183);
                const v220 = v218 ? false : true;
                const v224 = stdlib.eq(v205, v194);
                const v226 = v224 ? false : true;
                const v229 = v220 ? v226 : false;
                if (v229) {
                  v216 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                   }
                else {
                  const v232 = stdlib.eq(v183, v205);
                  const v234 = v232 ? false : true;
                  const v238 = stdlib.eq(v183, v194);
                  const v240 = v238 ? false : true;
                  const v243 = v234 ? v240 : false;
                  if (v243) {
                    v216 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                     }
                  else {
                    const v246 = stdlib.eq(v194, v183);
                    const v248 = v246 ? false : true;
                    const v257 = v248 ? v226 : false;
                    if (v257) {
                      v216 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                       }
                    else {
                      v216 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3);
                       }
                     }
                   }
                const cv153 = v216;
                const cv422 = v210;
                const cv423 = v211;
                
                v153 = cv153;
                v422 = cv422;
                v423 = cv423;
                
                continue; }
               }
             }
           }
         }
      const v348 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      const v349 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      if (v348) {
        const v354 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:117:38:decimal', stdlib.UInt_max, 3), v131);
        ;
        stdlib.protect(ctc3, await interact.seeOutcome(v153), {
          at: './index.rsh:123:28:application',
          fs: ['at ./index.rsh:122:11:application call to [unknown function] (defined at: ./index.rsh:122:26:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
           });
        return; }
      else {
        if (v349) {
          const v360 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:118:43:decimal', stdlib.UInt_max, 3), v131);
          ;
          stdlib.protect(ctc3, await interact.seeOutcome(v153), {
            at: './index.rsh:123:28:application',
            fs: ['at ./index.rsh:122:11:application call to [unknown function] (defined at: ./index.rsh:122:26:function exp)'],
            msg: 'seeOutcome',
            who: 'Alice'
             });
          return; }
        else {
          const v365 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:119:21:decimal', stdlib.UInt_max, 3), v131);
          ;
          stdlib.protect(ctc3, await interact.seeOutcome(v153), {
            at: './index.rsh:123:28:application',
            fs: ['at ./index.rsh:122:11:application call to [unknown function] (defined at: ./index.rsh:122:26:function exp)'],
            msg: 'seeOutcome',
            who: 'Alice'
             });
          return; } } }
     }
  
  
   }
export async function Bob(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc5, ctc2, ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc5, ctc2, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc5, ctc2, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc5, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc5, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc0, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc0]);
  
  
  const v127 = await ctc.creationTime();
  const txn1 = await (ctc.recv('Bob', 1, 1, [ctc0], false, false));
  const [v131] = txn1.data;
  const v132 = txn1.value;
  const v136 = txn1.time;
  const v130 = txn1.from;
  const v133 = stdlib.eq(v132, v131);
  stdlib.assert(v133, {
    at: './index.rsh:66:9:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Bob'
     });
  stdlib.assert(true, {
    at: './index.rsh:66:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
     });
  const v135 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v132);
  stdlib.protect(ctc1, await interact.acceptWager(v131), {
    at: './index.rsh:71:29:application',
    fs: ['at ./index.rsh:70:13:application call to [unknown function] (defined at: ./index.rsh:70:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
     });
  const txn2 = await (ctc.sendrecv('Bob', 2, 0, stdlib.checkedBigNumberify('./index.rsh:72:9:dot', stdlib.UInt_max, 3), [ctc5, ctc0, ctc0, ctc0], [v130, v131, v135, v136], v131, [], true, true, stdlib.checkedBigNumberify('./index.rsh:54:18:decimal', stdlib.UInt_max, 10), (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:72:9:dot', stdlib.UInt_max, 1), v130, v131, v135, v136]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:72:9:dot', stdlib.UInt_max, 1), v130, v131, v135]);
    const [] = txn2.data;
    const v140 = txn2.value;
    const v144 = txn2.time;
    const v139 = txn2.from;
    
    const v141 = stdlib.eq(v140, v131);
    stdlib.assert(v141, {
      at: './index.rsh:72:9:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Bob'
       });
    stdlib.assert(true, {
      at: './index.rsh:72:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
       });
    const v143 = stdlib.add(v135, v140);
    sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:74:15:after expr stmt semicolon', stdlib.UInt_max, 2), v130, v131, v139, v143, v144]);
    sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:74:15:after expr stmt semicolon', stdlib.UInt_max, 2), v130, v131, v139, v143]);
    sim_r.isHalt = false;
    
    return sim_r;
     })));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv('Bob', 3, 0, [], false, false));
    const [] = txn3.data;
    const v402 = txn3.value;
    const v407 = txn3.time;
    const v401 = txn3.from;
    const v403 = stdlib.eq(v402, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v403, {
      at: 'reach standard library:68:7:dot',
      fs: ['at ./index.rsh:73:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'pay amount correct',
      who: 'Bob'
       });
    const v404 = stdlib.addressEq(v130, v401);
    stdlib.assert(v404, {
      at: 'reach standard library:68:7:dot',
      fs: ['at ./index.rsh:73:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
       });
    const v406 = stdlib.add(v135, v402);
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:62:33:application',
      fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:73:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
       });
    return;
     }
  else {
    const [] = txn2.data;
    const v140 = txn2.value;
    const v144 = txn2.time;
    const v139 = txn2.from;
    const v141 = stdlib.eq(v140, v131);
    stdlib.assert(v141, {
      at: './index.rsh:72:9:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Bob'
       });
    stdlib.assert(true, {
      at: './index.rsh:72:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
       });
    const v143 = stdlib.add(v135, v140);
    const txn3 = await (ctc.recv('Bob', 4, 0, [], false, stdlib.checkedBigNumberify('./index.rsh:54:18:decimal', stdlib.UInt_max, 10)));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv('Bob', 5, 0, [], false, false));
      const [] = txn4.data;
      const v380 = txn4.value;
      const v385 = txn4.time;
      const v379 = txn4.from;
      const v381 = stdlib.eq(v380, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v381, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:78:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'pay amount correct',
        who: 'Bob'
         });
      const v382 = stdlib.addressEq(v130, v379);
      stdlib.assert(v382, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:78:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
         });
      const v384 = stdlib.add(v143, v380);
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:62:33:application',
        fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:78:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
         });
      return;
       }
    else {
      const [] = txn3.data;
      const v148 = txn3.value;
      const v152 = txn3.time;
      const v147 = txn3.from;
      const v149 = stdlib.eq(v148, v131);
      stdlib.assert(v149, {
        at: './index.rsh:77:9:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Bob'
         });
      stdlib.assert(true, {
        at: './index.rsh:77:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
         });
      const v151 = stdlib.add(v143, v148);
      let v153 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3);
      let v422 = v151;
      let v423 = v152;
      
      while ((() => {
        const v163 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3));
        
        return v163; })()) {
        const txn4 = await (ctc.recv('Bob', 8, 1, [ctc2], false, stdlib.checkedBigNumberify('./index.rsh:54:18:decimal', stdlib.UInt_max, 10)));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv('Bob', 9, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 5), [ctc5, ctc0, ctc5, ctc5, ctc0, ctc0], [v130, v131, v139, v147, v422, v423], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn5) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), v130, v131, v139, v147, v422, v423]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), v130, v131, v139, v147, v422]);
            const [] = txn5.data;
            const v328 = txn5.value;
            const v333 = txn5.time;
            const v327 = txn5.from;
            
            const v329 = stdlib.eq(v328, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v329, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:90:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'pay amount correct',
              who: 'Bob'
               });
            const v330 = stdlib.addressEq(v139, v327);
            stdlib.assert(v330, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:90:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
               });
            const v332 = stdlib.add(v422, v328);
            sim_r.txns.push({
              amt: v332,
              to: v139
               });
            sim_r.nextSt = stdlib.digest(ctc4, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc4, []);
            sim_r.isHalt = true;
            
            return sim_r;
             })));
          const [] = txn5.data;
          const v328 = txn5.value;
          const v333 = txn5.time;
          const v327 = txn5.from;
          const v329 = stdlib.eq(v328, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v329, {
            at: 'reach standard library:68:7:dot',
            fs: ['at ./index.rsh:90:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
            msg: 'pay amount correct',
            who: 'Bob'
             });
          const v330 = stdlib.addressEq(v139, v327);
          stdlib.assert(v330, {
            at: 'reach standard library:68:7:dot',
            fs: ['at ./index.rsh:90:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
             });
          const v332 = stdlib.add(v422, v328);
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:62:33:application',
            fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:90:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
             });
          return;
           }
        else {
          const [v172] = txn4.data;
          const v173 = txn4.value;
          const v178 = txn4.time;
          const v171 = txn4.from;
          const v174 = stdlib.eq(v173, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v174, {
            at: './index.rsh:89:11:dot',
            fs: [],
            msg: 'pay amount correct',
            who: 'Bob'
             });
          const v175 = stdlib.addressEq(v130, v171);
          stdlib.assert(v175, {
            at: './index.rsh:89:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
             });
          const v177 = stdlib.add(v422, v173);
          const v181 = stdlib.protect(ctc0, await interact.getHand(), {
            at: './index.rsh:95:52:application',
            fs: ['at ./index.rsh:94:15:application call to [unknown function] (defined at: ./index.rsh:94:19:function exp)'],
            msg: 'getHand',
            who: 'Bob'
             });
          const txn5 = await (ctc.sendrecv('Bob', 10, 1, stdlib.checkedBigNumberify('./index.rsh:96:11:dot', stdlib.UInt_max, 6), [ctc5, ctc0, ctc5, ctc5, ctc2, ctc0, ctc0, ctc0], [v130, v131, v139, v147, v172, v177, v178, v181], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0], true, true, stdlib.checkedBigNumberify('./index.rsh:54:18:decimal', stdlib.UInt_max, 10), (async (txn5) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:96:11:dot', stdlib.UInt_max, 8), v130, v131, v139, v147, v172, v177, v178]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:96:11:dot', stdlib.UInt_max, 8), v130, v131, v139, v147, v172, v177]);
            const [v183] = txn5.data;
            const v184 = txn5.value;
            const v189 = txn5.time;
            const v182 = txn5.from;
            
            const v185 = stdlib.eq(v184, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v185, {
              at: './index.rsh:96:11:dot',
              fs: [],
              msg: 'pay amount correct',
              who: 'Bob'
               });
            const v186 = stdlib.addressEq(v139, v182);
            stdlib.assert(v186, {
              at: './index.rsh:96:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
               });
            const v188 = stdlib.add(v177, v184);
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:98:17:after expr stmt semicolon', stdlib.UInt_max, 10), v130, v131, v139, v147, v172, v183, v188, v189]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:98:17:after expr stmt semicolon', stdlib.UInt_max, 10), v130, v131, v139, v147, v172, v183, v188]);
            sim_r.isHalt = false;
            
            return sim_r;
             })));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.recv('Bob', 11, 0, [], false, false));
            const [] = txn6.data;
            const v306 = txn6.value;
            const v311 = txn6.time;
            const v305 = txn6.from;
            const v307 = stdlib.eq(v306, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v307, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:97:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'pay amount correct',
              who: 'Bob'
               });
            const v308 = stdlib.addressEq(v130, v305);
            stdlib.assert(v308, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:97:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
               });
            const v310 = stdlib.add(v177, v306);
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:62:33:application',
              fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:97:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
               });
            return;
             }
          else {
            const [v183] = txn5.data;
            const v184 = txn5.value;
            const v189 = txn5.time;
            const v182 = txn5.from;
            const v185 = stdlib.eq(v184, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v185, {
              at: './index.rsh:96:11:dot',
              fs: [],
              msg: 'pay amount correct',
              who: 'Bob'
               });
            const v186 = stdlib.addressEq(v139, v182);
            stdlib.assert(v186, {
              at: './index.rsh:96:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
               });
            const v188 = stdlib.add(v177, v184);
            const txn6 = await (ctc.recv('Bob', 12, 1, [ctc0], false, stdlib.checkedBigNumberify('./index.rsh:54:18:decimal', stdlib.UInt_max, 10)));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv('Bob', 13, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 7), [ctc5, ctc0, ctc5, ctc5, ctc2, ctc0, ctc0, ctc0], [v130, v131, v139, v147, v172, v183, v188, v189], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn7) => {
                const sim_r = { txns: [] };
                sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 10), v130, v131, v139, v147, v172, v183, v188, v189]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 10), v130, v131, v139, v147, v172, v183, v188]);
                const [] = txn7.data;
                const v284 = txn7.value;
                const v289 = txn7.time;
                const v283 = txn7.from;
                
                const v285 = stdlib.eq(v284, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v285, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:104:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Bob'
                   });
                const v286 = stdlib.addressEq(v139, v283);
                stdlib.assert(v286, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:104:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Bob'
                   });
                const v288 = stdlib.add(v188, v284);
                sim_r.txns.push({
                  amt: v288,
                  to: v139
                   });
                sim_r.nextSt = stdlib.digest(ctc4, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc4, []);
                sim_r.isHalt = true;
                
                return sim_r;
                 })));
              const [] = txn7.data;
              const v284 = txn7.value;
              const v289 = txn7.time;
              const v283 = txn7.from;
              const v285 = stdlib.eq(v284, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v285, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:104:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                msg: 'pay amount correct',
                who: 'Bob'
                 });
              const v286 = stdlib.addressEq(v139, v283);
              stdlib.assert(v286, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:104:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                 });
              const v288 = stdlib.add(v188, v284);
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:62:33:application',
                fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:104:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                 });
              return;
               }
            else {
              const [v194] = txn6.data;
              const v195 = txn6.value;
              const v200 = txn6.time;
              const v193 = txn6.from;
              const v196 = stdlib.eq(v195, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v196, {
                at: './index.rsh:103:11:dot',
                fs: [],
                msg: 'pay amount correct',
                who: 'Bob'
                 });
              const v197 = stdlib.addressEq(v147, v193);
              stdlib.assert(v197, {
                at: './index.rsh:103:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                 });
              const v199 = stdlib.add(v188, v195);
              const txn7 = await (ctc.recv('Bob', 14, 2, [ctc0, ctc0], false, stdlib.checkedBigNumberify('./index.rsh:54:18:decimal', stdlib.UInt_max, 10)));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.recv('Bob', 15, 0, [], false, false));
                const [] = txn8.data;
                const v262 = txn8.value;
                const v267 = txn8.time;
                const v261 = txn8.from;
                const v263 = stdlib.eq(v262, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v263, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:110:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Bob'
                   });
                const v264 = stdlib.addressEq(v147, v261);
                stdlib.assert(v264, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:110:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Bob'
                   });
                const v266 = stdlib.add(v199, v262);
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:62:33:application',
                  fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:110:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Bob'
                   });
                return;
                 }
              else {
                const [v204, v205] = txn7.data;
                const v206 = txn7.value;
                const v211 = txn7.time;
                const v203 = txn7.from;
                const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v207, {
                  at: './index.rsh:109:11:dot',
                  fs: [],
                  msg: 'pay amount correct',
                  who: 'Bob'
                   });
                const v208 = stdlib.addressEq(v130, v203);
                stdlib.assert(v208, {
                  at: './index.rsh:109:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                   });
                const v210 = stdlib.add(v199, v206);
                const v213 = stdlib.digest(ctc3, [v204, v205]);
                const v214 = stdlib.eq(v172, v213);
                stdlib.assert(v214, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:111:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                  msg: null,
                  who: 'Bob'
                   });
                let v216;
                const v218 = stdlib.eq(v205, v183);
                const v220 = v218 ? false : true;
                const v224 = stdlib.eq(v205, v194);
                const v226 = v224 ? false : true;
                const v229 = v220 ? v226 : false;
                if (v229) {
                  v216 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                   }
                else {
                  const v232 = stdlib.eq(v183, v205);
                  const v234 = v232 ? false : true;
                  const v238 = stdlib.eq(v183, v194);
                  const v240 = v238 ? false : true;
                  const v243 = v234 ? v240 : false;
                  if (v243) {
                    v216 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                     }
                  else {
                    const v246 = stdlib.eq(v194, v183);
                    const v248 = v246 ? false : true;
                    const v257 = v248 ? v226 : false;
                    if (v257) {
                      v216 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                       }
                    else {
                      v216 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3);
                       }
                     }
                   }
                const cv153 = v216;
                const cv422 = v210;
                const cv423 = v211;
                
                v153 = cv153;
                v422 = cv422;
                v423 = cv423;
                
                continue; }
               }
             }
           }
         }
      const v348 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      const v349 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      if (v348) {
        const v354 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:117:38:decimal', stdlib.UInt_max, 3), v131);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v153), {
          at: './index.rsh:123:28:application',
          fs: ['at ./index.rsh:122:11:application call to [unknown function] (defined at: ./index.rsh:122:26:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
           });
        return; }
      else {
        if (v349) {
          const v360 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:118:43:decimal', stdlib.UInt_max, 3), v131);
          ;
          stdlib.protect(ctc1, await interact.seeOutcome(v153), {
            at: './index.rsh:123:28:application',
            fs: ['at ./index.rsh:122:11:application call to [unknown function] (defined at: ./index.rsh:122:26:function exp)'],
            msg: 'seeOutcome',
            who: 'Bob'
             });
          return; }
        else {
          const v365 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:119:21:decimal', stdlib.UInt_max, 3), v131);
          ;
          stdlib.protect(ctc1, await interact.seeOutcome(v153), {
            at: './index.rsh:123:28:application',
            fs: ['at ./index.rsh:122:11:application call to [unknown function] (defined at: ./index.rsh:122:26:function exp)'],
            msg: 'seeOutcome',
            who: 'Bob'
             });
          return; } } }
     }
  
  
   }
export async function David(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc5, ctc2, ctc0, ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc5, ctc2, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc5, ctc2, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc5, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc5, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc0]);
  
  
  const v127 = await ctc.creationTime();
  const txn1 = await (ctc.recv('David', 1, 1, [ctc0], false, false));
  const [v131] = txn1.data;
  const v132 = txn1.value;
  const v136 = txn1.time;
  const v130 = txn1.from;
  const v133 = stdlib.eq(v132, v131);
  stdlib.assert(v133, {
    at: './index.rsh:66:9:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'David'
     });
  stdlib.assert(true, {
    at: './index.rsh:66:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'David'
     });
  const v135 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v132);
  const txn2 = await (ctc.recv('David', 2, 0, [], false, stdlib.checkedBigNumberify('./index.rsh:54:18:decimal', stdlib.UInt_max, 10)));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv('David', 3, 0, [], false, false));
    const [] = txn3.data;
    const v402 = txn3.value;
    const v407 = txn3.time;
    const v401 = txn3.from;
    const v403 = stdlib.eq(v402, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v403, {
      at: 'reach standard library:68:7:dot',
      fs: ['at ./index.rsh:73:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'pay amount correct',
      who: 'David'
       });
    const v404 = stdlib.addressEq(v130, v401);
    stdlib.assert(v404, {
      at: 'reach standard library:68:7:dot',
      fs: ['at ./index.rsh:73:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'sender correct',
      who: 'David'
       });
    const v406 = stdlib.add(v135, v402);
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:62:33:application',
      fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:73:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'informTimeout',
      who: 'David'
       });
    return;
     }
  else {
    const [] = txn2.data;
    const v140 = txn2.value;
    const v144 = txn2.time;
    const v139 = txn2.from;
    const v141 = stdlib.eq(v140, v131);
    stdlib.assert(v141, {
      at: './index.rsh:72:9:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'David'
       });
    stdlib.assert(true, {
      at: './index.rsh:72:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'David'
       });
    const v143 = stdlib.add(v135, v140);
    stdlib.protect(ctc1, await interact.acceptWager(v131), {
      at: './index.rsh:76:29:application',
      fs: ['at ./index.rsh:75:13:application call to [unknown function] (defined at: ./index.rsh:75:17:function exp)'],
      msg: 'acceptWager',
      who: 'David'
       });
    const txn3 = await (ctc.sendrecv('David', 4, 0, stdlib.checkedBigNumberify('./index.rsh:77:9:dot', stdlib.UInt_max, 4), [ctc5, ctc0, ctc5, ctc0, ctc0], [v130, v131, v139, v143, v144], v131, [], true, true, stdlib.checkedBigNumberify('./index.rsh:54:18:decimal', stdlib.UInt_max, 10), (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:77:9:dot', stdlib.UInt_max, 2), v130, v131, v139, v143, v144]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:77:9:dot', stdlib.UInt_max, 2), v130, v131, v139, v143]);
      const [] = txn3.data;
      const v148 = txn3.value;
      const v152 = txn3.time;
      const v147 = txn3.from;
      
      const v149 = stdlib.eq(v148, v131);
      stdlib.assert(v149, {
        at: './index.rsh:77:9:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'David'
         });
      stdlib.assert(true, {
        at: './index.rsh:77:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'David'
         });
      const v151 = stdlib.add(v143, v148);
      const v153 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3);
      const v422 = v151;
      const v423 = v152;
      
      if ((() => {
        const v163 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3));
        
        return v163; })()) {
        sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:83:17:after expr stmt semicolon', stdlib.UInt_max, 6), v130, v131, v139, v147, v422, v423]);
        sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:83:17:after expr stmt semicolon', stdlib.UInt_max, 6), v130, v131, v139, v147, v422]);
        sim_r.isHalt = false;
         }
      else {
        const v348 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v349 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        if (v348) {
          const v354 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:117:38:decimal', stdlib.UInt_max, 3), v131);
          sim_r.txns.push({
            amt: v354,
            to: v130
             });
          sim_r.nextSt = stdlib.digest(ctc4, []);
          sim_r.nextSt_noTime = stdlib.digest(ctc4, []);
          sim_r.isHalt = true;
           }
        else {
          if (v349) {
            const v360 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:118:43:decimal', stdlib.UInt_max, 3), v131);
            sim_r.txns.push({
              amt: v360,
              to: v139
               });
            sim_r.nextSt = stdlib.digest(ctc4, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc4, []);
            sim_r.isHalt = true;
             }
          else {
            const v365 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:119:21:decimal', stdlib.UInt_max, 3), v131);
            sim_r.txns.push({
              amt: v365,
              to: v147
               });
            sim_r.nextSt = stdlib.digest(ctc4, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc4, []);
            sim_r.isHalt = true;
             } } }
      return sim_r;
       })));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv('David', 5, 0, [], false, false));
      const [] = txn4.data;
      const v380 = txn4.value;
      const v385 = txn4.time;
      const v379 = txn4.from;
      const v381 = stdlib.eq(v380, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v381, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:78:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'pay amount correct',
        who: 'David'
         });
      const v382 = stdlib.addressEq(v130, v379);
      stdlib.assert(v382, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:78:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'sender correct',
        who: 'David'
         });
      const v384 = stdlib.add(v143, v380);
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:62:33:application',
        fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:78:41:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'informTimeout',
        who: 'David'
         });
      return;
       }
    else {
      const [] = txn3.data;
      const v148 = txn3.value;
      const v152 = txn3.time;
      const v147 = txn3.from;
      const v149 = stdlib.eq(v148, v131);
      stdlib.assert(v149, {
        at: './index.rsh:77:9:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'David'
         });
      stdlib.assert(true, {
        at: './index.rsh:77:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'David'
         });
      const v151 = stdlib.add(v143, v148);
      let v153 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3);
      let v422 = v151;
      let v423 = v152;
      
      while ((() => {
        const v163 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3));
        
        return v163; })()) {
        const txn4 = await (ctc.recv('David', 8, 1, [ctc2], false, stdlib.checkedBigNumberify('./index.rsh:54:18:decimal', stdlib.UInt_max, 10)));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.recv('David', 9, 0, [], false, false));
          const [] = txn5.data;
          const v328 = txn5.value;
          const v333 = txn5.time;
          const v327 = txn5.from;
          const v329 = stdlib.eq(v328, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v329, {
            at: 'reach standard library:68:7:dot',
            fs: ['at ./index.rsh:90:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
            msg: 'pay amount correct',
            who: 'David'
             });
          const v330 = stdlib.addressEq(v139, v327);
          stdlib.assert(v330, {
            at: 'reach standard library:68:7:dot',
            fs: ['at ./index.rsh:90:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
            msg: 'sender correct',
            who: 'David'
             });
          const v332 = stdlib.add(v422, v328);
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:62:33:application',
            fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:90:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
            msg: 'informTimeout',
            who: 'David'
             });
          return;
           }
        else {
          const [v172] = txn4.data;
          const v173 = txn4.value;
          const v178 = txn4.time;
          const v171 = txn4.from;
          const v174 = stdlib.eq(v173, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v174, {
            at: './index.rsh:89:11:dot',
            fs: [],
            msg: 'pay amount correct',
            who: 'David'
             });
          const v175 = stdlib.addressEq(v130, v171);
          stdlib.assert(v175, {
            at: './index.rsh:89:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'David'
             });
          const v177 = stdlib.add(v422, v173);
          const txn5 = await (ctc.recv('David', 10, 1, [ctc0], false, stdlib.checkedBigNumberify('./index.rsh:54:18:decimal', stdlib.UInt_max, 10)));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.recv('David', 11, 0, [], false, false));
            const [] = txn6.data;
            const v306 = txn6.value;
            const v311 = txn6.time;
            const v305 = txn6.from;
            const v307 = stdlib.eq(v306, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v307, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:97:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'pay amount correct',
              who: 'David'
               });
            const v308 = stdlib.addressEq(v130, v305);
            stdlib.assert(v308, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:97:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'sender correct',
              who: 'David'
               });
            const v310 = stdlib.add(v177, v306);
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:62:33:application',
              fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:97:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'informTimeout',
              who: 'David'
               });
            return;
             }
          else {
            const [v183] = txn5.data;
            const v184 = txn5.value;
            const v189 = txn5.time;
            const v182 = txn5.from;
            const v185 = stdlib.eq(v184, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v185, {
              at: './index.rsh:96:11:dot',
              fs: [],
              msg: 'pay amount correct',
              who: 'David'
               });
            const v186 = stdlib.addressEq(v139, v182);
            stdlib.assert(v186, {
              at: './index.rsh:96:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'David'
               });
            const v188 = stdlib.add(v177, v184);
            const v192 = stdlib.protect(ctc0, await interact.getHand(), {
              at: './index.rsh:102:52:application',
              fs: ['at ./index.rsh:101:15:application call to [unknown function] (defined at: ./index.rsh:101:19:function exp)'],
              msg: 'getHand',
              who: 'David'
               });
            const txn6 = await (ctc.sendrecv('David', 12, 1, stdlib.checkedBigNumberify('./index.rsh:103:11:dot', stdlib.UInt_max, 7), [ctc5, ctc0, ctc5, ctc5, ctc2, ctc0, ctc0, ctc0, ctc0], [v130, v131, v139, v147, v172, v183, v188, v189, v192], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0], true, true, stdlib.checkedBigNumberify('./index.rsh:54:18:decimal', stdlib.UInt_max, 10), (async (txn6) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:103:11:dot', stdlib.UInt_max, 10), v130, v131, v139, v147, v172, v183, v188, v189]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:103:11:dot', stdlib.UInt_max, 10), v130, v131, v139, v147, v172, v183, v188]);
              const [v194] = txn6.data;
              const v195 = txn6.value;
              const v200 = txn6.time;
              const v193 = txn6.from;
              
              const v196 = stdlib.eq(v195, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v196, {
                at: './index.rsh:103:11:dot',
                fs: [],
                msg: 'pay amount correct',
                who: 'David'
                 });
              const v197 = stdlib.addressEq(v147, v193);
              stdlib.assert(v197, {
                at: './index.rsh:103:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'David'
                 });
              const v199 = stdlib.add(v188, v195);
              sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:105:17:after expr stmt semicolon', stdlib.UInt_max, 12), v130, v131, v139, v147, v172, v183, v194, v199, v200]);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:105:17:after expr stmt semicolon', stdlib.UInt_max, 12), v130, v131, v139, v147, v172, v183, v194, v199]);
              sim_r.isHalt = false;
              
              return sim_r;
               })));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.recv('David', 13, 0, [], false, false));
              const [] = txn7.data;
              const v284 = txn7.value;
              const v289 = txn7.time;
              const v283 = txn7.from;
              const v285 = stdlib.eq(v284, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v285, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:104:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                msg: 'pay amount correct',
                who: 'David'
                 });
              const v286 = stdlib.addressEq(v139, v283);
              stdlib.assert(v286, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:104:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                msg: 'sender correct',
                who: 'David'
                 });
              const v288 = stdlib.add(v188, v284);
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:62:33:application',
                fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:104:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                msg: 'informTimeout',
                who: 'David'
                 });
              return;
               }
            else {
              const [v194] = txn6.data;
              const v195 = txn6.value;
              const v200 = txn6.time;
              const v193 = txn6.from;
              const v196 = stdlib.eq(v195, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v196, {
                at: './index.rsh:103:11:dot',
                fs: [],
                msg: 'pay amount correct',
                who: 'David'
                 });
              const v197 = stdlib.addressEq(v147, v193);
              stdlib.assert(v197, {
                at: './index.rsh:103:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'David'
                 });
              const v199 = stdlib.add(v188, v195);
              const txn7 = await (ctc.recv('David', 14, 2, [ctc0, ctc0], false, stdlib.checkedBigNumberify('./index.rsh:54:18:decimal', stdlib.UInt_max, 10)));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.sendrecv('David', 15, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 8), [ctc5, ctc0, ctc5, ctc5, ctc2, ctc0, ctc0, ctc0, ctc0], [v130, v131, v139, v147, v172, v183, v194, v199, v200], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn8) => {
                  const sim_r = { txns: [] };
                  sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 12), v130, v131, v139, v147, v172, v183, v194, v199, v200]);
                  sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 12), v130, v131, v139, v147, v172, v183, v194, v199]);
                  const [] = txn8.data;
                  const v262 = txn8.value;
                  const v267 = txn8.time;
                  const v261 = txn8.from;
                  
                  const v263 = stdlib.eq(v262, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                  stdlib.assert(v263, {
                    at: 'reach standard library:68:7:dot',
                    fs: ['at ./index.rsh:110:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                    msg: 'pay amount correct',
                    who: 'David'
                     });
                  const v264 = stdlib.addressEq(v147, v261);
                  stdlib.assert(v264, {
                    at: 'reach standard library:68:7:dot',
                    fs: ['at ./index.rsh:110:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                    msg: 'sender correct',
                    who: 'David'
                     });
                  const v266 = stdlib.add(v199, v262);
                  sim_r.txns.push({
                    amt: v266,
                    to: v147
                     });
                  sim_r.nextSt = stdlib.digest(ctc4, []);
                  sim_r.nextSt_noTime = stdlib.digest(ctc4, []);
                  sim_r.isHalt = true;
                  
                  return sim_r;
                   })));
                const [] = txn8.data;
                const v262 = txn8.value;
                const v267 = txn8.time;
                const v261 = txn8.from;
                const v263 = stdlib.eq(v262, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v263, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:110:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                  msg: 'pay amount correct',
                  who: 'David'
                   });
                const v264 = stdlib.addressEq(v147, v261);
                stdlib.assert(v264, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:110:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                  msg: 'sender correct',
                  who: 'David'
                   });
                const v266 = stdlib.add(v199, v262);
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:62:33:application',
                  fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:28:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:110:43:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'David'
                   });
                return;
                 }
              else {
                const [v204, v205] = txn7.data;
                const v206 = txn7.value;
                const v211 = txn7.time;
                const v203 = txn7.from;
                const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v207, {
                  at: './index.rsh:109:11:dot',
                  fs: [],
                  msg: 'pay amount correct',
                  who: 'David'
                   });
                const v208 = stdlib.addressEq(v130, v203);
                stdlib.assert(v208, {
                  at: './index.rsh:109:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'David'
                   });
                const v210 = stdlib.add(v199, v206);
                const v213 = stdlib.digest(ctc3, [v204, v205]);
                const v214 = stdlib.eq(v172, v213);
                stdlib.assert(v214, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:111:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                  msg: null,
                  who: 'David'
                   });
                let v216;
                const v218 = stdlib.eq(v205, v183);
                const v220 = v218 ? false : true;
                const v224 = stdlib.eq(v205, v194);
                const v226 = v224 ? false : true;
                const v229 = v220 ? v226 : false;
                if (v229) {
                  v216 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                   }
                else {
                  const v232 = stdlib.eq(v183, v205);
                  const v234 = v232 ? false : true;
                  const v238 = stdlib.eq(v183, v194);
                  const v240 = v238 ? false : true;
                  const v243 = v234 ? v240 : false;
                  if (v243) {
                    v216 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                     }
                  else {
                    const v246 = stdlib.eq(v194, v183);
                    const v248 = v246 ? false : true;
                    const v257 = v248 ? v226 : false;
                    if (v257) {
                      v216 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                       }
                    else {
                      v216 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3);
                       }
                     }
                   }
                const cv153 = v216;
                const cv422 = v210;
                const cv423 = v211;
                
                v153 = cv153;
                v422 = cv422;
                v423 = cv423;
                
                continue; }
               }
             }
           }
         }
      const v348 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      const v349 = stdlib.eq(v153, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      if (v348) {
        const v354 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:117:38:decimal', stdlib.UInt_max, 3), v131);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v153), {
          at: './index.rsh:123:28:application',
          fs: ['at ./index.rsh:122:11:application call to [unknown function] (defined at: ./index.rsh:122:26:function exp)'],
          msg: 'seeOutcome',
          who: 'David'
           });
        return; }
      else {
        if (v349) {
          const v360 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:118:43:decimal', stdlib.UInt_max, 3), v131);
          ;
          stdlib.protect(ctc1, await interact.seeOutcome(v153), {
            at: './index.rsh:123:28:application',
            fs: ['at ./index.rsh:122:11:application call to [unknown function] (defined at: ./index.rsh:122:26:function exp)'],
            msg: 'seeOutcome',
            who: 'David'
             });
          return; }
        else {
          const v365 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:119:21:decimal', stdlib.UInt_max, 3), v131);
          ;
          stdlib.protect(ctc1, await interact.seeOutcome(v153), {
            at: './index.rsh:123:28:application',
            fs: ['at ./index.rsh:122:11:application call to [unknown function] (defined at: ./index.rsh:122:26:function exp)'],
            msg: 'seeOutcome',
            who: 'David'
             });
          return; } } }
     }
  
  
   }

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 4
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m3}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
gtxn 2 Sender
byte "{{m8}}"
==
||
gtxn 2 Sender
byte "{{m9}}"
==
||
gtxn 2 Sender
byte "{{m10}}"
==
||
gtxn 2 Sender
byte "{{m11}}"
==
||
gtxn 2 Sender
byte "{{m12}}"
==
||
gtxn 2 Sender
byte "{{m13}}"
==
||
gtxn 2 Sender
byte "{{m14}}"
==
||
gtxn 2 Sender
byte "{{m15}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 2
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 4
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
assert
txn RekeyTo
global ZeroAddress
==
assert
global ZeroAddress
byte "{{Deployer}}"
global GroupSize
int 1
-
txn GroupIndex
==
gtxna 0 ApplicationArgs 2
btoi
&&
select
txn CloseRemainderTo
==
assert
txn GroupIndex
int 4
>=
assert
done:
int 1
return
`,
  stepargs: [0, 89, 129, 129, 161, 161, 0, 0, 225, 193, 233, 225, 241, 233, 257, 241],
  steps: [null, `#pragma version 3
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 6
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:66:9:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Just "sender correct"
// "./index.rsh:66:9:dot"
// "[]"
int 1
assert
int 0
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 255
// compute state in HM_Set 1
int 1
itob
gtxn 3 Sender
concat
gtxna 0 ApplicationArgs 5
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:72:9:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
gtxna 0 ApplicationArgs 6
btoi
==
assert
// Just "sender correct"
// "./index.rsh:72:9:dot"
// "[]"
int 1
assert
gtxna 0 ApplicationArgs 7
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 255
// compute state in HM_Set 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxn 3 Sender
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 3
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Just "pay amount correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:73:41:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:73:41:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxna 0 ApplicationArgs 5
gtxn 3 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 7
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 5 Fee
gtxn 4 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 4
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:77:9:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
gtxna 0 ApplicationArgs 6
btoi
==
assert
// Just "sender correct"
// "./index.rsh:77:9:dot"
// "[]"
int 1
assert
gtxna 0 ApplicationArgs 8
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 255
int 3
int 3
==
bz l0
// compute state in HM_Set 6
int 6
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxn 3 Sender
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
l0:
int 3
int 0
==
bz l1
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
int 3
gtxna 0 ApplicationArgs 6
btoi
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 5 Fee
gtxn 4 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
==
assert
pop
l1:
int 3
int 1
==
bz l2
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 7
==
assert
gtxn 4 Amount
int 3
gtxna 0 ApplicationArgs 6
btoi
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 5 Fee
gtxn 4 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
==
assert
pop
l2:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxn 3 Sender
==
assert
gtxn 4 Amount
int 3
gtxna 0 ApplicationArgs 6
btoi
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 5 Fee
gtxn 4 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 5
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Just "pay amount correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:78:41:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:78:41:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxna 0 ApplicationArgs 5
gtxn 3 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 8
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 5 Fee
gtxn 4 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`, null, null, `#pragma version 3
// Handler 8
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 11
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:89:11:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:89:11:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 3 Sender
==
assert
gtxna 0 ApplicationArgs 9
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 255
// compute state in HM_Set 8
int 8
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 10
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 9
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 10
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Just "pay amount correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:90:43:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:90:43:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxna 0 ApplicationArgs 7
gtxn 3 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 7
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 9
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 5 Fee
gtxn 4 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 10
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 12
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 8
int 8
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:96:11:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:96:11:dot"
// "[]"
gtxna 0 ApplicationArgs 7
gtxn 3 Sender
==
assert
gtxna 0 ApplicationArgs 10
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 255
// compute state in HM_Set 10
int 10
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 11
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 11
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 11
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 8
int 8
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Just "pay amount correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:97:43:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:97:43:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxna 0 ApplicationArgs 5
gtxn 3 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 10
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 5 Fee
gtxn 4 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 12
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 13
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 10
int 10
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
gtxna 0 ApplicationArgs 11
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:103:11:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:103:11:dot"
// "[]"
gtxna 0 ApplicationArgs 8
gtxn 3 Sender
==
assert
gtxna 0 ApplicationArgs 11
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 255
// compute state in HM_Set 12
int 12
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
gtxna 0 ApplicationArgs 12
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 13
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 12
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 10
int 10
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
gtxna 0 ApplicationArgs 11
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Just "pay amount correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:104:43:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:104:43:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxna 0 ApplicationArgs 7
gtxn 3 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 7
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 11
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 5 Fee
gtxn 4 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 14
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 15
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 12
int 12
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
gtxna 0 ApplicationArgs 11
concat
gtxna 0 ApplicationArgs 12
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Just "pay amount correct"
// "./index.rsh:109:11:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:109:11:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 3 Sender
==
assert
gtxna 0 ApplicationArgs 12
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 254
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:111:24:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
gtxna 0 ApplicationArgs 9
gtxna 0 ApplicationArgs 13
gtxna 0 ApplicationArgs 14
concat
keccak256
==
assert
gtxna 0 ApplicationArgs 14
btoi
gtxna 0 ApplicationArgs 11
btoi
==
!
store 252
gtxna 0 ApplicationArgs 14
btoi
gtxna 0 ApplicationArgs 10
btoi
==
!
load 252
&&
bz l0
int 0
store 253
b l1
l0:
gtxna 0 ApplicationArgs 10
btoi
gtxna 0 ApplicationArgs 14
btoi
==
!
gtxna 0 ApplicationArgs 10
btoi
gtxna 0 ApplicationArgs 11
btoi
==
!
&&
bz l2
int 1
store 253
b l3
l2:
gtxna 0 ApplicationArgs 11
btoi
gtxna 0 ApplicationArgs 10
btoi
==
!
load 252
&&
bz l4
int 2
store 253
b l5
l4:
int 3
store 253
l5:
l3:
l1:
load 253
int 3
==
bz l6
// compute state in HM_Set 6
int 6
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
l6:
load 253
int 0
==
bz l7
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
int 3
gtxna 0 ApplicationArgs 6
btoi
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 5 Fee
gtxn 4 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
==
assert
pop
l7:
load 253
int 1
==
bz l8
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 7
==
assert
gtxn 4 Amount
int 3
gtxna 0 ApplicationArgs 6
btoi
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 5 Fee
gtxn 4 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
==
assert
pop
l8:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 8
==
assert
gtxn 4 Amount
int 3
gtxna 0 ApplicationArgs 6
btoi
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 5 Fee
gtxn 4 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 15
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 13
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 12
int 12
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
gtxna 0 ApplicationArgs 11
concat
gtxna 0 ApplicationArgs 12
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Just "pay amount correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:110:43:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:110:43:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxna 0 ApplicationArgs 8
gtxn 3 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 8
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 12
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 5 Fee
gtxn 4 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`],
  unsupported: false
   };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v127",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v147",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v177",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v178",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v183",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v147",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v177",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v178",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v147",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v183",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v189",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v147",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v183",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v189",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v147",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v183",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v199",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v200",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v204",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v147",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v183",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v199",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v200",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e15",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v143",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v143",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v147",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v422",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v423",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v147",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v422",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v423",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v127",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v147",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v177",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v178",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v183",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v147",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v177",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v178",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v147",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v183",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v189",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v147",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v183",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v189",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v147",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v183",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v199",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v200",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v204",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v147",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v183",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v199",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v200",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m15",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v143",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v143",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v147",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v422",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v423",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v130",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v139",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v147",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v422",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v423",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055611e16806100826000396000f3fe6080604052600436106100c65760003560e01c8063918e2d831161007f578063a67e872a11610059578063a67e872a1461017f578063d8c6509814610192578063e4f83a8f146101a5578063ef3d7a3a146101b8576100cd565b8063918e2d83146101465780639532ef0114610159578063a3b59bb11461016c576100cd565b8063108acff5146100d25780631d7780fc146100e757806321e52025146100fa578063344414f91461010d5780633fa4ac20146101205780635abedf1114610133576100cd565b366100cd57005b600080fd5b6100e56100e03660046118a7565b6101cb565b005b6100e56100f5366004611872565b6102e8565b6100e5610108366004611856565b610592565b6100e561011b36600461181f565b610798565b6100e561012e366004611884565b6109a5565b6100e561014136600461181f565b610aba565b6100e5610154366004611856565b610bce565b6100e5610167366004611896565b610ce2565b6100e561017a36600461183a565b610e19565b6100e561018d36600461180e565b611047565b6100e56101a036600461183a565b61117b565b6100e56101b33660046118a7565b611289565b6100e56101c636600461180e565b61140c565b6040516101df906001908390602001611cc3565b6040516020818303038152906040528051906020012060001c6000541461020557600080fd5b60008055610218600a6060830135611d93565b4310158015610225575060015b61022e57600080fd5b341561023957600080fd5b3361024760208301836117ed565b6001600160a01b03161461025a57600080fd5b61026760208201826117ed565b6001600160a01b03166108fc610281346040850135611d93565b6040518115909202916000818181858888f193505050501580156102a9573d6000803e3d6000fd5b507f613b30050768160fb8fb1fedba26a4639c7df8d370861f403061c2d46f9802e5816040516102d99190611c55565b60405180910390a16000805533ff5b6040516102fc90600c908390602001611cd7565b6040516020818303038152906040528051906020012060001c6000541461032257600080fd5b600080805560408051808201909152818152602081019190915261034c600a610100840135611d93565b431061035757600080fd5b341561036257600080fd5b3361037060208401846117ed565b6001600160a01b03161461038357600080fd5b6040805161012084013560208201526101408401359181019190915260600160408051601f1981840301815291905280516020909101206080830135146103c957600080fd5b61014082013560c0830135146103e05760016103e3565b60005b1515602082015261014082013560a083013514610401576001610404565b60005b61040f576000610415565b80602001515b1561042357600081526104ac565b60a08201356101408301351461043a57600161043d565b60005b610448576000610461565b60a082013560c08301351461045e576001610461565b60005b1561046f57600181526104ac565b60c082013560a083013514610485576001610488565b60005b610493576000610499565b80602001515b156104a757600281526104ac565b600381525b7f35b0cc60671d4688556943e5afc9fe83ed0c6e58c225691deffce6a5bb60f437826040516104db9190611c04565b60405180910390a16104eb61173d565b6104f860208401846117ed565b81516001600160a01b039091169052805160208085013591015261052260608401604085016117ed565b81516001600160a01b0390911660409091015261054560808401606085016117ed565b81516001600160a01b03909116606090910152815160208201515261056e3460e0850135611d93565b6020808301805190910191909152514360409091015261058d8161151a565b505050565b6040516105a690600a908390602001611cae565b6040516020818303038152906040528051906020012060001c600054146105cc57600080fd5b600080805560408051602081019091529081526105ee600a60e0840135611d93565b43106105f957600080fd5b341561060457600080fd5b3361061560808401606085016117ed565b6001600160a01b03161461062857600080fd5b6106363460c0840135611d93565b81526040517f1d0ff61441c8d360d085803948a4c70413a000ca2a079f773bfa11341f4c29ba90610668908490611bb3565b60405180910390a16106da60405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b6106e760208401846117ed565b6001600160a01b031681526020808401359082015261070c60608401604085016117ed565b6001600160a01b0316604082015261072a60808401606085016117ed565b6001600160a01b031660608201526080808401359082015260a080840135908201526101008084013560c0830152825160e0830152439082015260405161077890600c908390602001611cec565b60408051601f198184030181529190528051602090910120600055505050565b6040516107ac906006908390602001611c85565b6040516020818303038152906040528051906020012060001c600054146107d257600080fd5b600080805560408051602081019091529081526107f4600a60a0840135611d93565b43106107ff57600080fd5b341561080a57600080fd5b3361081860208401846117ed565b6001600160a01b03161461082b57600080fd5b610839346080840135611d93565b81526040517fb90c7786727e29cb40b75ebceeb1de98397bb417dc6f0ab43b2138a6305b151e9061086b908490611b19565b60405180910390a16108ce6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6108db60208401846117ed565b6001600160a01b031681526020808401359082015261090060608401604085016117ed565b6001600160a01b0316604082015261091e60808401606085016117ed565b6001600160a01b03908116606083810191825260c0868101356080808701918252875160a080890191825243858a019081526040805160086020808301919091528c518c16828401528c0151988101989098528a01518916938701939093529551909616948401949094525190820152915160e08301525161010082015261012001610778565b6040516109b990600c908390602001611cd7565b6040516020818303038152906040528051906020012060001c600054146109df57600080fd5b600080556109f3600a610100830135611d93565b4310158015610a00575060015b610a0957600080fd5b3415610a1457600080fd5b33610a2560808301606084016117ed565b6001600160a01b031614610a3857600080fd5b610a4860808201606083016117ed565b6001600160a01b03166108fc610a623460e0850135611d93565b6040518115909202916000818181858888f19350505050158015610a8a573d6000803e3d6000fd5b507fcafe8b4256b7d3b2bceb07b5033cbffdecaec600db481480119ac6f188248e3f816040516102d99190611c30565b604051610ace906006908390602001611c85565b6040516020818303038152906040528051906020012060001c60005414610af457600080fd5b60008055610b07600a60a0830135611d93565b4310158015610b14575060015b610b1d57600080fd5b3415610b2857600080fd5b33610b3960608301604084016117ed565b6001600160a01b031614610b4c57600080fd5b610b5c60608201604083016117ed565b6001600160a01b03166108fc610b76346080850135611d93565b6040518115909202916000818181858888f19350505050158015610b9e573d6000803e3d6000fd5b507fb1d9bcdb5880ee8a5134ed35d0c3acd36a2dafb04e4005a42ff935de188ee59e816040516102d99190611b35565b604051610be290600a908390602001611cae565b6040516020818303038152906040528051906020012060001c60005414610c0857600080fd5b60008055610c1b600a60e0830135611d93565b4310158015610c28575060015b610c3157600080fd5b3415610c3c57600080fd5b33610c4d60608301604084016117ed565b6001600160a01b031614610c6057600080fd5b610c7060608201604083016117ed565b6001600160a01b03166108fc610c8a3460c0850135611d93565b6040518115909202916000818181858888f19350505050158015610cb2573d6000803e3d6000fd5b507f66939e5f7e60c95a7e8aae4532b71d148abc6b830f0d8199c57db43b60c52ab9816040516102d99190611bd1565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c60005414610d1f57600080fd5b6000808055604080516020810190915290815234602083013514610d4257600080fd5b610d4d346000611d93565b81526040805183358152602080850135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a1610dc0604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b33815260208381013581830190815283516040808501918252436060808701918252825160019681019690965286516001600160a01b0316928601929092529251908401525160808301525160a082015260c001610778565b604051610e2d906008908390602001611c99565b6040516020818303038152906040528051906020012060001c60005414610e5357600080fd5b60008080556040805160208101909152908152610e75600a60c0840135611d93565b4310610e8057600080fd5b3415610e8b57600080fd5b33610e9c60608401604085016117ed565b6001600160a01b031614610eaf57600080fd5b610ebd3460a0840135611d93565b81526040517f3da868e3020c948b819c162de4fe9d055d5327b9e5c081c2a8cb2b7aa45211f290610eef908490611b65565b60405180910390a1610f5a60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b610f6760208401846117ed565b6001600160a01b0316815260208084013590820152610f8c60608401604085016117ed565b6001600160a01b03166040820152610faa60808401606085016117ed565b6001600160a01b03908116606083810191825260808681013581860190815260e08089013560a0808901918252895160c0808b0191825243858c0190815260408051600a6020808301919091528e518e16828401528e01519a81019a909a528c01518b1697890197909752975190981690860152915194840194909452519282019290925291516101008301525161012082015261014001610778565b60405161105b906002908390602001611d7f565b6040516020818303038152906040528051906020012060001c6000541461108157600080fd5b60008055611094600a6080830135611d93565b431061109f57600080fd5b346020820135146110af57600080fd5b7fe01627aaf1f0bb581f65b78edfe4fad643253f9af3304d8d4e02c7892e008e03816040516110de9190611ae9565b60405180910390a16110ee61173d565b6110fb60208301836117ed565b81516001600160a01b039091169052805160208084013591015261112560608301604084016117ed565b81516001600160a01b03909116604090910152805133606091820152602082015160039052611158903490840135611d93565b602080830180519091019190915251436040909101526111778161151a565b5050565b60405161118f906008908390602001611c99565b6040516020818303038152906040528051906020012060001c600054146111b557600080fd5b600080556111c8600a60c0830135611d93565b43101580156111d5575060015b6111de57600080fd5b34156111e957600080fd5b336111f760208301836117ed565b6001600160a01b03161461120a57600080fd5b61121760208201826117ed565b6001600160a01b03166108fc6112313460a0850135611d93565b6040518115909202916000818181858888f19350505050158015611259573d6000803e3d6000fd5b507f322476dd10594481aa1eb15283243b14fbefb4a86374cf9727fe126ca16666fd816040516102d99190611b82565b60405161129d906001908390602001611cc3565b6040516020818303038152906040528051906020012060001c600054146112c357600080fd5b600080805560408051602081019091529081526112e5600a6060840135611d93565b43106112f057600080fd5b3460208301351461130057600080fd5b61130e346040840135611d93565b81526040517fe2fcb5361608dd42d825c4e917fd4fca89057bb8eb0b7e34b8c2813a114cc15290611340908490611c55565b60405180910390a161138c6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b61139960208401846117ed565b6001600160a01b03908116825260208481013581840190815233604080860191825286516060808801918252436080808a0191825284516002988101989098528951891694880194909452945190860152915190941693830193909352915160a0820152905160c082015260e001610778565b604051611420906002908390602001611d7f565b6040516020818303038152906040528051906020012060001c6000541461144657600080fd5b60008055611459600a6080830135611d93565b4310158015611466575060015b61146f57600080fd5b341561147a57600080fd5b3361148860208301836117ed565b6001600160a01b03161461149b57600080fd5b6114a860208201826117ed565b6001600160a01b03166108fc6114c2346060850135611d93565b6040518115909202916000818181858888f193505050501580156114ea573d6000803e3d6000fd5b507f7206b35298c8dc27a88d0202316b60bd31564f2bc4c02d3f4ff85b4f5102e0e6816040516102d99190611ae9565b602081015151600314156115ff576040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b019889528c51516001600160a01b039081168c528d5189015188528d518d0151811687528d51860151811685528d890180518a01518452518d01518a528c516006998101999099528b5181169c89019c909c5295519387019390935292518916928501929092529051909616908201529351918401919091525160e0830152906101000160408051601f19818403018152919052805160209091012060005550611679565b6040805160e081018252600081830181815260608084018381526080850184815260a0860185815260c087018681528588526020808901979097528951516001600160a01b03908116909652895187015190935288519097015184169052865190910151909116909352830151519091526111778161167c565b50565b8051608001516116db57805180516020909101516001600160a01b03909116906108fc906116ab906003611dab565b6040518115909202916000818181858888f193505050501580156116d3573d6000803e3d6000fd5b506000805533ff5b80516080015160011415611713578060000151604001516001600160a01b03166108fc82600001516020015160036116ab9190611dab565b8060000151606001516001600160a01b03166108fc82600001516020015160036116ab9190611dab565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161179160405180606001604052806000815260200160008152602001600081525090565b905290565b80356001600160a01b03811681146117ad57600080fd5b919050565b600060e082840312156117c3578081fd5b50919050565b600061010082840312156117c3578081fd5b600061012082840312156117c3578081fd5b6000602082840312156117fe578081fd5b61180782611796565b9392505050565b600060c082840312156117c3578081fd5b600060e08284031215611830578081fd5b61180783836117b2565b6000610100828403121561184c578081fd5b61180783836117c9565b60006101208284031215611868578081fd5b61180783836117db565b600061016082840312156117c3578081fd5b600061014082840312156117c3578081fd5b6000604082840312156117c3578081fd5b600060a082840312156117c3578081fd5b6001600160a01b03806118ca83611796565b16835260208201356020840152806118e460408401611796565b166040840152806118f760608401611796565b166060840152506080818101359083015260a090810135910152565b6001600160a01b038061192583611796565b168352602082013560208401528061193f60408401611796565b1660408401528061195260608401611796565b166060840152506080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b038061198d83611796565b16835260208201356020840152806119a760408401611796565b166040840152806119ba60608401611796565b166060840152506080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301525050565b6001600160a01b036119fe82611796565b1682526020810135602083015260408101356040830152606081013560608301525050565b6001600160a01b0380611a3583611796565b1683526020820135602084015280611a4f60408401611796565b16604084015280611a6260608401611796565b166060840152506080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301526101008082013581840152505050565b6001600160a01b0380611ab383611796565b1683526020820135602084015280611acd60408401611796565b1660408401525060608181013590830152608090810135910152565b60c08101611af78284611aa1565b60a0830135801515808214611b0b57600080fd5b8060a0850152505092915050565b60e08101611b2782846118b8565b60c092830135919092015290565b60e08101611b4382846118b8565b60c0830135801515808214611b5757600080fd5b8060c0850152505092915050565b6101008101611b748284611913565b60e092830135919092015290565b6101008101611b918284611913565b60e0830135801515808214611ba557600080fd5b8060e0850152505092915050565b6101208101611bc2828461197b565b61010092830135919092015290565b6101208101611be0828461197b565b61010080840135801515808214611bf657600080fd5b808386015250505092915050565b6101608101611c138284611a23565b610120838101359083015261014092830135929091019190915290565b6101408101611c3f8284611a23565b61012080840135801515808214611bf657600080fd5b60a08101611c6382846119ed565b6080830135801515808214611c7757600080fd5b806080850152505092915050565b82815260e0810161180760208301846118b8565b82815261010081016118076020830184611913565b8281526101208101611807602083018461197b565b82815260a0810161180760208301846119ed565b82815261014081016118076020830184611a23565b60006101408201905083825260018060a01b038351166020830152602083015160408301526040830151611d2b60608401826001600160a01b03169052565b5060608301516001600160a01b038116608084015250608083015160a083015260a083015160c083015260c083015160e083015260e083015161010081818501528085015161012085015250509392505050565b82815260c081016118076020830184611aa1565b60008219821115611da657611da6611dca565b500190565b6000816000190483118215151615611dc557611dc5611dca565b500290565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220b3e2ed4d1c6877ba34c80e6d35f382382e2c86ae922f49ccd049d7cbf57bfe9d64736f6c63430008020033`,
  deployMode: `DM_constructor`
   };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
   };

