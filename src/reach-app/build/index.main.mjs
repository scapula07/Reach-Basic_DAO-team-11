// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      3: [ctc0, ctc1, ctc1, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc1],
      6: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Governor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Governor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Governor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Object({
    deadline: ctc0,
    proposalID: ctc0,
    ticketPrice: ctc0
    });
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc3]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  
  
  const v213 = stdlib.protect(ctc1, await interact.getProposal(), {
    at: './index.rsh:36:82:application',
    fs: ['at ./index.rsh:35:17:application call to [unknown function] (defined at: ./index.rsh:35:20:function exp)'],
    msg: 'getProposal',
    who: 'Governor'
    });
  const v214 = v213.deadline;
  const v215 = v213.proposalID;
  const v216 = v213.ticketPrice;
  
  const txn1 = await (ctc.sendrecv({
    args: [v216, v214, v215],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:38:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v221, v222, v223], secs: v225, time: v224, didSend: v35, from: v220 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v221, v222, v223], secs: v225, time: v224, didSend: v35, from: v220 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v220, v221, v222, v224],
    evt_cnt: 0,
    funcNum: 1,
    lct: v224,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v228, time: v227, didSend: v40, from: v226 } = txn2;
      
      ;
      
      const v232 = stdlib.safeAdd(v224, v222);
      const v233 = stdlib.checkedBigNumberify('./index.rsh:45:22:decimal', stdlib.UInt_max, '0');
      const v234 = stdlib.checkedBigNumberify('./index.rsh:45:19:decimal', stdlib.UInt_max, '0');
      const v235 = v227;
      const v236 = v224;
      const v242 = stdlib.checkedBigNumberify('./index.rsh:29:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v248 = stdlib.gt(v232, v236);
        
        return v248;})()) {
        sim_r.isHalt = false;
        }
      else {
        
        const v309 = stdlib.ge(v234, v233);
        const v310 = v309 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v228, time: v227, didSend: v40, from: v226 } = txn2;
  ;
  const v229 = stdlib.addressEq(v220, v226);
  stdlib.assert(v229, {
    at: './index.rsh:40:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Governor'
    });
  stdlib.protect(ctc2, await interact.proposalReady(), {
    at: './index.rsh:41:34:application',
    fs: ['at ./index.rsh:41:34:application call to [unknown function] (defined at: ./index.rsh:41:34:function exp)', 'at ./index.rsh:41:34:application call to "liftedInteract" (defined at: ./index.rsh:41:34:application)'],
    msg: 'proposalReady',
    who: 'Governor'
    });
  
  const v232 = stdlib.safeAdd(v224, v222);
  let v233 = stdlib.checkedBigNumberify('./index.rsh:45:22:decimal', stdlib.UInt_max, '0');
  let v234 = stdlib.checkedBigNumberify('./index.rsh:45:19:decimal', stdlib.UInt_max, '0');
  let v235 = v227;
  let v236 = v224;
  let v242 = stdlib.checkedBigNumberify('./index.rsh:29:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v248 = stdlib.gt(v232, v236);
    
    return v248;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc4],
      timeoutAt: ['time', v232],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v220, v221, v232, v233, v234, v235, v242],
        evt_cnt: 0,
        funcNum: 6,
        lct: v235,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:57:19:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v290, time: v289, didSend: v133, from: v288 } = txn4;
          
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc6, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v290, time: v289, didSend: v133, from: v288 } = txn4;
      ;
      const v291 = stdlib.addressEq(v220, v288);
      stdlib.assert(v291, {
        at: './index.rsh:57:19:dot',
        fs: ['at ./index.rsh:56:36:application call to [unknown function] (defined at: ./index.rsh:56:36:function exp)'],
        msg: 'sender correct',
        who: 'Governor'
        });
      stdlib.protect(ctc2, await interact.showTimeout(stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2')), {
        at: './index.rsh:60:39:application',
        fs: ['at ./index.rsh:60:39:application call to [unknown function] (defined at: ./index.rsh:60:39:function exp)', 'at ./index.rsh:60:39:application call to "liftedInteract" (defined at: ./index.rsh:60:39:application)', 'at ./index.rsh:56:36:application call to [unknown function] (defined at: ./index.rsh:56:36:function exp)'],
        msg: 'showTimeout',
        who: 'Governor'
        });
      
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 7,
        out_tys: [ctc5],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v297], secs: v299, time: v298, didSend: v147, from: v296 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v300 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      await txn5.getOutput('Voter_showOutcome', 'v300', ctc0, v300);
      const cv233 = v233;
      const cv234 = v234;
      const cv235 = v298;
      const cv236 = v289;
      const cv242 = v242;
      
      v233 = cv233;
      v234 = cv234;
      v235 = cv235;
      v236 = cv236;
      v242 = cv242;
      
      continue;
      
      
      }
    else {
      const {data: [v264], secs: v266, time: v265, didSend: v96, from: v263 } = txn3;
      undefined /* setApiDetails */;
      const v268 = v264[stdlib.checkedBigNumberify('./index.rsh:48:12:spread', stdlib.UInt_max, '0')];
      const v270 = stdlib.safeAdd(v242, v221);
      ;
      const v273 = true;
      await txn3.getOutput('Voter_vote', 'v273', ctc3, v273);
      const v280 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v281 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v282 = v268 ? v280 : v281;
      const v283 = v282[stdlib.checkedBigNumberify('./index.rsh:51:21:array', stdlib.UInt_max, '0')];
      const v284 = v282[stdlib.checkedBigNumberify('./index.rsh:51:21:array', stdlib.UInt_max, '1')];
      const v285 = stdlib.safeAdd(v234, v283);
      const v286 = stdlib.safeAdd(v233, v284);
      const cv233 = v286;
      const cv234 = v285;
      const cv235 = v265;
      const cv236 = v235;
      const cv242 = v270;
      
      v233 = cv233;
      v234 = cv234;
      v235 = cv235;
      v236 = cv236;
      v242 = cv242;
      
      continue;}
    
    }
  stdlib.protect(ctc2, await interact.showOutcome(v223, v234, v233), {
    at: './index.rsh:33:33:application',
    fs: ['at ./index.rsh:33:33:application call to [unknown function] (defined at: ./index.rsh:33:33:function exp)', 'at ./index.rsh:33:33:application call to "liftedInteract" (defined at: ./index.rsh:33:33:application)', 'at ./index.rsh:69:16:application call to "showOutcome" (defined at: ./index.rsh:31:60:function exp)'],
    msg: 'showOutcome',
    who: 'Governor'
    });
  
  const v309 = stdlib.ge(v234, v233);
  const v310 = v309 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v315], secs: v317, time: v316, didSend: v171, from: v314 } = txn3;
  undefined /* setApiDetails */;
  ;
  await txn3.getOutput('Voter_showOutcome', 'v310', ctc0, v310);
  const txn4 = await (ctc.sendrecv({
    args: [v220, v233, v234, v242],
    evt_cnt: 0,
    funcNum: 4,
    lct: v316,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:76:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v324, time: v323, didSend: v181, from: v322 } = txn4;
      
      ;
      const v326 = stdlib.gt(v234, v233);
      if (v326) {
        
        }
      else {
        }
      sim_r.txns.push({
        kind: 'from',
        to: v220,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v324, time: v323, didSend: v181, from: v322 } = txn4;
  ;
  const v325 = stdlib.addressEq(v220, v322);
  stdlib.assert(v325, {
    at: './index.rsh:76:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Governor'
    });
  const v326 = stdlib.gt(v234, v233);
  if (v326) {
    stdlib.protect(ctc2, await interact.callFunction(), {
      at: './index.rsh:78:37:application',
      fs: ['at ./index.rsh:78:37:application call to [unknown function] (defined at: ./index.rsh:78:37:function exp)', 'at ./index.rsh:78:37:application call to "liftedInteract" (defined at: ./index.rsh:78:37:application)'],
      msg: 'callFunction',
      who: 'Governor'
      });
    
    }
  else {
    }
  ;
  return;
  
  
  
  
  
  
  
  
  };
export async function _Voter_showOutcome3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voter_showOutcome3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voter_showOutcome3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Null;
  
  
  const [v220, v233, v234, v242, v310] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc1, ctc1]);
  const v313 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:73:5:application',
    fs: ['at ./index.rsh:73:5:application call to [unknown function] (defined at: ./index.rsh:73:5:function exp)'],
    msg: 'in',
    who: 'Voter_showOutcome'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v220, v233, v234, v242, v310, v313],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:73:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v315], secs: v317, time: v316, didSend: v171, from: v314 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Voter_showOutcome"
        });
      ;
      const v318 = await txn1.getOutput('Voter_showOutcome', 'v310', ctc1, v310);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v315], secs: v317, time: v316, didSend: v171, from: v314 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v318 = await txn1.getOutput('Voter_showOutcome', 'v310', ctc1, v310);
  stdlib.protect(ctc3, await interact.out(v315, v318), {
    at: './index.rsh:73:5:application',
    fs: ['at ./index.rsh:73:5:application call to [unknown function] (defined at: ./index.rsh:73:5:function exp)', 'at ./index.rsh:74:8:application call to "k" (defined at: ./index.rsh:73:5:function exp)'],
    msg: 'out',
    who: 'Voter_showOutcome'
    });
  
  return;
  
  
  
  };
export async function _Voter_showOutcome7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voter_showOutcome7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voter_showOutcome7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Null;
  
  
  const [v220, v221, v232, v233, v234, v242, v289] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v295 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:61:11:application',
    fs: ['at ./index.rsh:61:11:application call to [unknown function] (defined at: ./index.rsh:61:11:function exp)', 'at ./index.rsh:56:36:application call to [unknown function] (defined at: ./index.rsh:56:36:function exp)'],
    msg: 'in',
    who: 'Voter_showOutcome'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v220, v221, v232, v233, v234, v242, v289, v295],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:61:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v297], secs: v299, time: v298, didSend: v147, from: v296 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Voter_showOutcome"
        });
      ;
      const v300 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      const v301 = await txn1.getOutput('Voter_showOutcome', 'v300', ctc1, v300);
      
      const v477 = v233;
      const v478 = v234;
      const v479 = v298;
      const v481 = v242;
      const v482 = stdlib.gt(v232, v289);
      if (v482) {
        sim_r.isHalt = false;
        }
      else {
        const v483 = stdlib.ge(v234, v233);
        const v484 = v483 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v297], secs: v299, time: v298, didSend: v147, from: v296 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v300 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
  const v301 = await txn1.getOutput('Voter_showOutcome', 'v300', ctc1, v300);
  stdlib.protect(ctc3, await interact.out(v297, v301), {
    at: './index.rsh:61:11:application',
    fs: ['at ./index.rsh:61:11:application call to [unknown function] (defined at: ./index.rsh:61:11:function exp)', 'at ./index.rsh:62:12:application call to "k" (defined at: ./index.rsh:61:11:function exp)', 'at ./index.rsh:56:36:application call to [unknown function] (defined at: ./index.rsh:56:36:function exp)'],
    msg: 'out',
    who: 'Voter_showOutcome'
    });
  
  const v477 = v233;
  const v478 = v234;
  const v479 = v298;
  const v481 = v242;
  const v482 = stdlib.gt(v232, v289);
  if (v482) {
    return;
    }
  else {
    const v483 = stdlib.ge(v234, v233);
    const v484 = v483 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    return;
    }
  
  
  };
export async function _Voter_vote6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voter_vote6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voter_vote6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_Null;
  
  
  const [v220, v221, v232, v233, v234, v235, v242] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v256 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:48:32:application call to [unknown function] (defined at: ./index.rsh:48:32:function exp)', 'at ./index.rsh:48:32:application call to [unknown function] (defined at: ./index.rsh:48:32:function exp)'],
    msg: 'in',
    who: 'Voter_vote'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v220, v221, v232, v233, v234, v235, v242, v256],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [v221, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v264], secs: v266, time: v265, didSend: v96, from: v263 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Voter_vote"
        });
      const v268 = v264[stdlib.checkedBigNumberify('./index.rsh:48:12:spread', stdlib.UInt_max, '0')];
      const v270 = stdlib.safeAdd(v242, v221);
      sim_r.txns.push({
        amt: v221,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v273 = true;
      const v274 = await txn1.getOutput('Voter_vote', 'v273', ctc2, v273);
      
      const v280 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v281 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v282 = v268 ? v280 : v281;
      const v283 = v282[stdlib.checkedBigNumberify('./index.rsh:51:21:array', stdlib.UInt_max, '0')];
      const v284 = v282[stdlib.checkedBigNumberify('./index.rsh:51:21:array', stdlib.UInt_max, '1')];
      const v285 = stdlib.safeAdd(v234, v283);
      const v286 = stdlib.safeAdd(v233, v284);
      const v497 = v286;
      const v498 = v285;
      const v499 = v265;
      const v501 = v270;
      const v502 = stdlib.gt(v232, v235);
      if (v502) {
        sim_r.isHalt = false;
        }
      else {
        const v503 = stdlib.ge(v285, v286);
        const v504 = v503 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v264], secs: v266, time: v265, didSend: v96, from: v263 } = txn1;
  undefined /* setApiDetails */;
  const v268 = v264[stdlib.checkedBigNumberify('./index.rsh:48:12:spread', stdlib.UInt_max, '0')];
  const v270 = stdlib.safeAdd(v242, v221);
  ;
  const v273 = true;
  const v274 = await txn1.getOutput('Voter_vote', 'v273', ctc2, v273);
  if (v96) {
    stdlib.protect(ctc4, await interact.out(v264, v274), {
      at: './index.rsh:48:13:application',
      fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:13:function exp)', 'at ./index.rsh:50:14:application call to "k" (defined at: ./index.rsh:49:36:function exp)', 'at ./index.rsh:49:36:application call to [unknown function] (defined at: ./index.rsh:49:36:function exp)'],
      msg: 'out',
      who: 'Voter_vote'
      });
    }
  else {
    }
  
  const v280 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v281 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v282 = v268 ? v280 : v281;
  const v283 = v282[stdlib.checkedBigNumberify('./index.rsh:51:21:array', stdlib.UInt_max, '0')];
  const v284 = v282[stdlib.checkedBigNumberify('./index.rsh:51:21:array', stdlib.UInt_max, '1')];
  const v285 = stdlib.safeAdd(v234, v283);
  const v286 = stdlib.safeAdd(v233, v284);
  const v497 = v286;
  const v498 = v285;
  const v499 = v265;
  const v501 = v270;
  const v502 = stdlib.gt(v232, v235);
  if (v502) {
    return;
    }
  else {
    const v503 = stdlib.ge(v285, v286);
    const v504 = v503 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    return;
    }
  
  
  };
export async function Voter_showOutcome(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voter_showOutcome expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voter_showOutcome expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Voter_showOutcome3(ctcTop, interact);}
  if (step == 7) {return _Voter_showOutcome7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Voter_vote(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voter_vote expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voter_vote expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Voter_vote6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Voter_showOutcome()uint64`, `Voter_vote(byte)byte`, `_Voter_showOutcome3()uint64`, `_Voter_showOutcome7()uint64`],
    pure: [],
    sigs: [`Voter_showOutcome()uint64`, `Voter_vote(byte)byte`, `_Voter_showOutcome3()uint64`, `_Voter_showOutcome7()uint64`]
    },
  appApproval: `BiARAAEHMCAoAwYIBDhI+JXWkA6Cxo7MDsHuzaAGQAUmAgEAACI1ADEYQQQ/KWRJIls1ASEIWzUCNhoAF0lBAFIiNQQjNQZJIQwMQAAXSSENDEAACCENEkQpQgIyIQwSRClCAFJJIQ4MQAAZIQ4SRDQBSSQMQAAGJBJEQv/jIQYSREL/1IG9m7/tBBJENhoBQgELNhoCFzUENhoDNhoBF0khCQxAAdpJIQcMQADoSSQMQABsJBJEJDQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AE3Kom3jT/ULCAEAAAAAAAAAEsAAAAAAAAAAKwgAgAAAAAAAAAAjUHNANXACA0AyEEWzQDIQVbNAMlWzQDIQpbMgY0AyELWzQDIQ9bQgKISCEHNAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/yEEWzX+IQVbNf0lWzX8IQpbNfshC1s1+oAEYbSsDLAyBjT9D0Q0/zEAEkQ0/zT+FlA0/RZQNPwWUDT7FlA0+hZQMgYWUChLAVcAUGdIJDUBMgY1AkICokkhEAxAAKZIIQc0ARJENARJIhJMNAISEUQoZEk1A0khBFs1/yEFWzX+STUFNf2ABFG89Lo0/VCwMgY0/gxENP+IArGACQAAAAAAAAERAbCAAQE1B4AQAAAAAAAAAAAAAAAAAAAAAYAQAAAAAAAAAAEAAAAAAAAAADT9F001/DQDVwAgNP80/jQDJVs0/CEIWwg0AyEKWzT8IlsIMgY0AyEPWzQDIQtbNP8IQgFlSCEJNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEkSc087A0/zEAEkSxIrIBNAMlW7III7IQNP+yB7NCAZtJIwxAAMNJIQYMQAB0SCEGNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQRbNf4hBVs1/SVbNfxJNQU1+4AEyJoPuzT7ULCACAAAAAAAAAE2NANXOAhQsDQDVzgINQc0/zT+FlA0/RZQNPwWUChLAVcAOGdIIQk1ATIGNQJCATYjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8lWzX+gASai5F0sDT/MQASRDT/NAMhBFs0/jQDIQVbCCIiMgY0/iJCAF5IgaCNBogBOCI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hCFs1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsDEANP8WUDT+FlAyBhZQKEsBVwA4Z0gjNQEyBjUCQgCQNf81/jX9Nfw1+zX6Nfk1+DT6NP4NQQAtNPg0+RZQNPoWUDT7FlA0/BZQNP0WUDT/FlAoSwFXAFBnSCEHNQEyBjUCQgBLIyI0/DT7D0019zT4NPsWUDT8FlA0/xZQNPcWUChLAVcAQGdIIQY1ATIGNQJCABwxGSEQEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 80,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v221",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v222",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v223",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v221",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v222",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v223",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v315",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bool",
                    "name": "elem0",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T15",
                "name": "v264",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v297",
                "type": "bool"
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
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v273",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v300",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v310",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Voter_showOutcome",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "_a0",
        "type": "bool"
      }
    ],
    "name": "Voter_vote",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_Voter_showOutcome3",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_Voter_showOutcome7",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v315",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bool",
                    "name": "elem0",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T15",
                "name": "v264",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v297",
                "type": "bool"
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
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001d0a38038062001d0a833981016040819052620000269162000254565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a162000095341560076200014d565b620000ca604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252436060808801828152600160008190559290925582519586019690965292519084015251928201929092529051608082015260a001604051602081830303815290604052600290805190602001906200014492919062000177565b50505062000328565b81620001735760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200018590620002eb565b90600052602060002090601f016020900481019282620001a95760008555620001f4565b82601f10620001c457805160ff1916838001178555620001f4565b82800160010185558215620001f4579182015b82811115620001f4578251825591602001919060010190620001d7565b506200020292915062000206565b5090565b5b8082111562000202576000815560010162000207565b604051606081016001600160401b03811182821017156200024e57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200026857600080fd5b604080519081016001600160401b03811182821017156200029957634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002b357600080fd5b620002bd6200021d565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806200030057607f821691505b602082108114156200032257634e487b7160e01b600052602260045260246000fd5b50919050565b6119d280620003386000396000f3fe6080604052600436106100bd5760003560e01c80638f3c54f411610079578063c798003711610056578063c79800371461018e578063cfb75417146101a1578063e2186a08146101a9578063ecca1331146101bc57005b80638f3c54f414610145578063a7661d5414610158578063ab53f2c61461016b57005b80631e93b0f1146100c6578063275176aa146100ea5780632c10a1591461010d5780633c11ad4a146101205780634a5a24e114610128578063832307571461013057005b366100c457005b005b3480156100d257600080fd5b506003545b6040519081526020015b60405180910390f35b6100fd6100f8366004611421565b6101cf565b60405190151581526020016100e1565b6100c461011b36600461145b565b610201565b6100d7610225565b6100d7610254565b34801561013c57600080fd5b506001546100d7565b6100c461015336600461145b565b610283565b6100c461016636600461145b565b6102a3565b34801561017757600080fd5b506101806102c3565b6040516100e1929190611477565b6100c461019c36600461145b565b610360565b6100d7610380565b6100c46101b736600461145b565b61045f565b6100c46101ca36600461145b565b61047f565b60006101d96111f3565b60208101515183151590526101ec611225565b6101f6828261049b565b606001519392505050565b610209611225565b61022161021b3684900384018461150b565b82610708565b5050565b600061022f61124f565b602081015160009052610240611225565b61024a82826108b8565b6020015192915050565b600061025e61124f565b60208101516000905261026f611225565b6102798282610aaa565b6040015192915050565b61028b611225565b61022161029d36849003840184611601565b82610aaa565b6102ab611225565b6102216102bd3684900384018461150b565b82610c6c565b6000606060005460028080546102d89061161d565b80601f01602080910402602001604051908101604052809291908181526020018280546103049061161d565b80156103515780601f1061032657610100808354040283529160200191610351565b820191906000526020600020905b81548152906001019060200180831161033457829003601f168201915b50505050509050915091509091565b610368611225565b61022161037a3684900384018461150b565b82610df2565b600080546003148061039457506000546007145b61039d57600080fd5b6000546003141561041157306001600160a01b0316633c11ad4a6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156103e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040c9190611652565b905090565b6000546007141561045c57306001600160a01b0316634a5a24e16040518163ffffffff1660e01b81526004016020604051808303816000875af11580156103e8573d6000803e3d6000fd5b90565b610467611225565b61022161047936849003840184611601565b826108b8565b610487611225565b6102216104993684900384018461166b565b825b6104ab6006600054146014610fd6565b81516104c69015806104bf57508251600154145b6015610fd6565b6000808055600280546104d89061161d565b80601f01602080910402602001604051908101604052809291908181526020018280546105049061161d565b80156105515780601f1061052657610100808354040283529160200191610551565b820191906000526020600020905b81548152906001019060200180831161053457829003601f168201915b5050505050806020019051810190610569919061179e565b9050610573611279565b610584826040015143106016610fd6565b604080513381528551602080830191909152860151515115158183015290517f9ddcaa511c27f6ad2a0e02d747762dbd9ead35a852b2e2b5c9d4e70fa7eaa5239181900360600190a16105de826020015134146013610fd6565b604051600181527f260b2a12453298761d0bfcb0172046978bd8f91b3c39d02c0daed5f0663e006f9060200160405180910390a1600160608401819052815181905281516000602091820181905281840180519190915251810191909152840151515161064f578060200151610652565b80515b604082015261065f6112db565b825181516001600160a01b039091169052602080840151825182015260408085015183518201526060850151908401519091015161069d9190610ffc565b60208201515260808301516040830151516106b89190610ffc565b6020808301805182019290925281514360409091015260a085015191516060019190915260c0840151908401516106ef9190610ffc565b6020820151608001526107018161104f565b5050505050565b610718600160005414600a610fd6565b815161073390158061072c57508251600154145b600b610fd6565b6000808055600280546107459061161d565b80601f01602080910402602001604051908101604052809291908181526020018280546107719061161d565b80156107be5780601f10610793576101008083540402835291602001916107be565b820191906000526020600020905b8154815290600101906020018083116107a157829003601f168201915b50505050508060200190518101906107d69190611833565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338460405161080992919061184f565b60405180910390a161081d34156008610fd6565b8051610835906001600160a01b031633146009610fd6565b61083d6112db565b815181516001600160a01b0390911690526020808301518251909101526060820151604083015161086e9190610ffc565b81516040908101919091526020808301805160009081905281519092018290528051439301929092526060808501518351909101529051608001526108b28161104f565b50505050565b6108c8600360005414600d610fd6565b81516108e39015806108dc57508251600154145b600e610fd6565b6000808055600280546108f59061161d565b80601f01602080910402602001604051908101604052809291908181526020018280546109219061161d565b801561096e5780601f106109435761010080835404028352916020019161096e565b820191906000526020600020905b81548152906001019060200180831161095157829003601f168201915b50505050508060200190518101906109869190611877565b90507fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e3533846040516109b99291906118fa565b60405180910390a16109cd3415600c610fd6565b7fa87f39f15de4cde835806b09f13e04ac3676af7db18aaae861ed76502cda6c678160800151604051610a0291815260200190565b60405180910390a1608081810151835260408051808301825260008082526020808301828152838501838152606080860185815289516001600160a01b0316808852858b01518552888b01518452828b01518252600490965543600155875194850195909552915195830195909552935193810193909352519282019290925260a0015b60405160208183030381529060405260029080519060200190610701929190611336565b610aba600760005414601d610fd6565b8151610ad5901580610ace57508251600154145b601e610fd6565b600080805560028054610ae79061161d565b80601f0160208091040260200160405190810160405280929190818152602001828054610b139061161d565b8015610b605780601f10610b3557610100808354040283529160200191610b60565b820191906000526020600020905b815481529060010190602001808311610b4357829003601f168201915b5050505050806020019051810190610b78919061179e565b90507f4e3b66664dfaa8eec55d3e4b5320be5906866b0f0eff2c9c5b88206afe3bdf8d3384604051610bab9291906118fa565b60405180910390a1610bbf3415601c610fd6565b604051600281527f46f7c7ff20077201c3a4ee6e7a7d095eb65adeeb584ec124d952f8f274f36d839060200160405180910390a160028252610bff6112db565b815181516001600160a01b0390911690526020808301518251820152604080840151835182015260608085015183850180519190915260808087015182519095019490945280514393019290925260c085015182519091015260a08401519051909101526108b28161104f565b610c7c6004600054146011610fd6565b8151610c97901580610c9057508251600154145b6012610fd6565b600080805560028054610ca99061161d565b80601f0160208091040260200160405190810160405280929190818152602001828054610cd59061161d565b8015610d225780601f10610cf757610100808354040283529160200191610d22565b820191906000526020600020905b815481529060010190602001808311610d0557829003601f168201915b5050505050806020019051810190610d3a9190611833565b90507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223384604051610d6d92919061184f565b60405180910390a1610d813415600f610fd6565b8051610d99906001600160a01b031633146010610fd6565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610dd6573d6000803e3d6000fd5b5060008080556001819055610ded906002906113ba565b505050565b610e026006600054146019610fd6565b8151610e1d901580610e1657508251600154145b601a610fd6565b600080805560028054610e2f9061161d565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5b9061161d565b8015610ea85780601f10610e7d57610100808354040283529160200191610ea8565b820191906000526020600020905b815481529060010190602001808311610e8b57829003601f168201915b5050505050806020019051810190610ec0919061179e565b9050610ed48160400151431015601b610fd6565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3384604051610f0592919061184f565b60405180910390a1610f1934156017610fd6565b8051610f31906001600160a01b031633146018610fd6565b610f7a6040518060e0016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152606080850151908401526080808501519084015260c08085015160a085015243908401819052600760005560015551610a8691839101611924565b816102215760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826110098382611976565b91508110156110495760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610ff3565b92915050565b6040805160208101909152600081526020820151606001518251604001511115611148576110bc6040518060e0016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b0316815282516020908101518183015283516040908101518184015281850180515160608501528051830151608080860191909152815183015160a08601529051015160c08401526006600055436001555161112491839101611924565b604051602081830303815290604052600290805190602001906108b2929190611336565b60208083015180519101511015611160576001611163565b60005b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b0316808b528d88018051518852805189015187525183015184528c5182526003909855436001558a519687019790975293519885019890985290519083015294519481019490945251908301529060c001611124565b60405180604001604052806000815260200161122060408051808201909152600060208201908152815290565b905290565b60405180608001604052806000815260200160008152602001600081526020016000151581525090565b60405180604001604052806000815260200161122060405180602001604052806000151581525090565b6040805160a081019091526000606082018181526080830191909152819081526020016112b9604051806040016040528060008152602001600081525090565b8152602001611220604051806040016040528060008152602001600081525090565b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016112206040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b8280546113429061161d565b90600052602060002090601f01602090048101928261136457600085556113aa565b82601f1061137d57805160ff19168380011785556113aa565b828001600101855582156113aa579182015b828111156113aa57825182559160200191906001019061138f565b506113b69291506113f7565b5090565b5080546113c69061161d565b6000825580601f106113d6575050565b601f0160209004906000526020600020908101906113f491906113f7565b50565b5b808211156113b657600081556001016113f8565b8035801515811461141c57600080fd5b919050565b60006020828403121561143357600080fd5b61143c8261140c565b9392505050565b60006040828403121561145557600080fd5b50919050565b60006040828403121561146d57600080fd5b61143c8383611443565b82815260006020604081840152835180604085015260005b818110156114ab5785810183015185820160600152820161148f565b818111156114bd576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff8111828210171561150557634e487b7160e01b600052604160045260246000fd5b60405290565b60006040828403121561151d57600080fd5b6115256114d4565b823581526115356020840161140c565b60208201529392505050565b60006020828403121561155357600080fd5b6040516020810181811067ffffffffffffffff8211171561158457634e487b7160e01b600052604160045260246000fd5b6040529050806115938361140c565b905292915050565b6000604082840312156115ad57600080fd5b6040516040810181811067ffffffffffffffff821117156115de57634e487b7160e01b600052604160045260246000fd5b604052823581529050806115f58460208501611541565b60208201525092915050565b60006040828403121561161357600080fd5b61143c838361159b565b600181811c9082168061163157607f821691505b6020821081141561145557634e487b7160e01b600052602260045260246000fd5b60006020828403121561166457600080fd5b5051919050565b6000818303604081121561167e57600080fd5b6116866114d4565b833581526020601f198301121561169c57600080fd5b60405191506020820182811067ffffffffffffffff821117156116cf57634e487b7160e01b600052604160045260246000fd5b6040526116df8560208601611541565b825260208101919091529392505050565b80516001600160a01b038116811461141c57600080fd5b600060e0828403121561171957600080fd5b60405160e0810181811067ffffffffffffffff8211171561174a57634e487b7160e01b600052604160045260246000fd5b604052905080611759836116f0565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201525092915050565b600060e082840312156117b057600080fd5b61143c8383611707565b6000608082840312156117cc57600080fd5b6040516080810181811067ffffffffffffffff821117156117fd57634e487b7160e01b600052604160045260246000fd5b60405290508061180c836116f0565b81526020830151602082015260408301516040820152606083015160608201525092915050565b60006080828403121561184557600080fd5b61143c83836117ba565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b600060a0828403121561188957600080fd5b60405160a0810181811067ffffffffffffffff821117156118ba57634e487b7160e01b600052604160045260246000fd5b6040526118c6836116f0565b8152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b6001600160a01b03831681526060810161143c602083018480518252602090810151511515910152565b81516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08101611049565b6000821982111561199757634e487b7160e01b600052601160045260246000fd5b50019056fea26469706673582212205e2ebbb3afa54ad2db2376fc065e045d9ee9bfb2a2fbcb796054089fbfc8647064736f6c634300080c0033`,
  BytecodeLen: 7434,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:39:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:70:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:75:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:81:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:45:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:58:11:after expr stmt',
    fs: ['at ./index.rsh:56:36:application call to [unknown function] (defined at: ./index.rsh:56:36:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Governor": Governor,
  "Voter_showOutcome": Voter_showOutcome,
  "Voter_vote": Voter_vote
  };
export const _APIs = {
  Voter: {
    showOutcome: Voter_showOutcome,
    vote: Voter_vote
    }
  };
