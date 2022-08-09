// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Object({
    deadline: ctc0,
    description: ctc1,
    exists: ctc2,
    proposalID: ctc0,
    ticketPrice: ctc0,
    title: ctc1
    });
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Address;
  
  
  const v218 = stdlib.protect(ctc3, await interact.getProposal(), {
    at: './index.rsh:39:88:application',
    fs: ['at ./index.rsh:38:17:application call to [unknown function] (defined at: ./index.rsh:38:20:function exp)'],
    msg: 'getProposal',
    who: 'Governor'
    });
  const v219 = v218.deadline;
  const v222 = v218.proposalID;
  const v223 = v218.ticketPrice;
  const v224 = v218.title;
  
  const txn1 = await (ctc.sendrecv({
    args: [v224, v223, v219, v222],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:41:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v230, v231, v232, v233], secs: v235, time: v234, didSend: v40, from: v229 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v230, v231, v232, v233], secs: v235, time: v234, didSend: v40, from: v229 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v229, v231, v232, v234],
    evt_cnt: 0,
    funcNum: 1,
    lct: v234,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v238, time: v237, didSend: v45, from: v236 } = txn2;
      
      ;
      
      const v242 = stdlib.add(v234, v232);
      const v243 = stdlib.checkedBigNumberify('./index.rsh:48:22:decimal', stdlib.UInt_max, '0');
      const v244 = stdlib.checkedBigNumberify('./index.rsh:48:19:decimal', stdlib.UInt_max, '0');
      const v245 = v237;
      const v246 = v234;
      const v252 = stdlib.checkedBigNumberify('./index.rsh:32:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v258 = stdlib.gt(v242, v246);
        
        return v258;})()) {
        sim_r.isHalt = false;
        }
      else {
        
        const v319 = stdlib.ge(v244, v243);
        const v320 = v319 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v238, time: v237, didSend: v45, from: v236 } = txn2;
  ;
  const v239 = stdlib.addressEq(v229, v236);
  stdlib.assert(v239, {
    at: './index.rsh:43:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Governor'
    });
  stdlib.protect(ctc4, await interact.proposalReady(), {
    at: './index.rsh:44:34:application',
    fs: ['at ./index.rsh:44:34:application call to [unknown function] (defined at: ./index.rsh:44:34:function exp)', 'at ./index.rsh:44:34:application call to "liftedInteract" (defined at: ./index.rsh:44:34:application)'],
    msg: 'proposalReady',
    who: 'Governor'
    });
  
  const v242 = stdlib.add(v234, v232);
  let v243 = stdlib.checkedBigNumberify('./index.rsh:48:22:decimal', stdlib.UInt_max, '0');
  let v244 = stdlib.checkedBigNumberify('./index.rsh:48:19:decimal', stdlib.UInt_max, '0');
  let v245 = v237;
  let v246 = v234;
  let v252 = stdlib.checkedBigNumberify('./index.rsh:32:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v258 = stdlib.gt(v242, v246);
    
    return v258;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc5],
      timeoutAt: ['time', v242],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v229, v231, v242, v243, v244, v245, v252],
        evt_cnt: 0,
        funcNum: 6,
        lct: v245,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:60:19:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v300, time: v299, didSend: v138, from: v298 } = txn4;
          
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v300, time: v299, didSend: v138, from: v298 } = txn4;
      ;
      const v301 = stdlib.addressEq(v229, v298);
      stdlib.assert(v301, {
        at: './index.rsh:60:19:dot',
        fs: ['at ./index.rsh:59:36:application call to [unknown function] (defined at: ./index.rsh:59:36:function exp)'],
        msg: 'sender correct',
        who: 'Governor'
        });
      stdlib.protect(ctc4, await interact.showTimeout(stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2')), {
        at: './index.rsh:63:39:application',
        fs: ['at ./index.rsh:63:39:application call to [unknown function] (defined at: ./index.rsh:63:39:function exp)', 'at ./index.rsh:63:39:application call to "liftedInteract" (defined at: ./index.rsh:63:39:application)', 'at ./index.rsh:59:36:application call to [unknown function] (defined at: ./index.rsh:59:36:function exp)'],
        msg: 'showTimeout',
        who: 'Governor'
        });
      
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 7,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v307], secs: v309, time: v308, didSend: v152, from: v306 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v310 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      await txn5.getOutput('Voter_showOutcome', 'v310', ctc0, v310);
      const cv243 = v243;
      const cv244 = v244;
      const cv245 = v308;
      const cv246 = v299;
      const cv252 = v252;
      
      v243 = cv243;
      v244 = cv244;
      v245 = cv245;
      v246 = cv246;
      v252 = cv252;
      
      continue;
      
      
      }
    else {
      const {data: [v274], secs: v276, time: v275, didSend: v101, from: v273 } = txn3;
      undefined /* setApiDetails */;
      const v278 = v274[stdlib.checkedBigNumberify('./index.rsh:51:12:spread', stdlib.UInt_max, '0')];
      const v280 = stdlib.add(v252, v231);
      ;
      const v283 = true;
      await txn3.getOutput('Voter_vote', 'v283', ctc2, v283);
      const v290 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v291 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v292 = v278 ? v290 : v291;
      const v293 = v292[stdlib.checkedBigNumberify('./index.rsh:54:21:array', stdlib.UInt_max, '0')];
      const v294 = v292[stdlib.checkedBigNumberify('./index.rsh:54:21:array', stdlib.UInt_max, '1')];
      const v295 = stdlib.add(v244, v293);
      const v296 = stdlib.add(v243, v294);
      const cv243 = v296;
      const cv244 = v295;
      const cv245 = v275;
      const cv246 = v245;
      const cv252 = v280;
      
      v243 = cv243;
      v244 = cv244;
      v245 = cv245;
      v246 = cv246;
      v252 = cv252;
      
      continue;}
    
    }
  stdlib.protect(ctc4, await interact.showOutcome(v233, v244, v243), {
    at: './index.rsh:36:33:application',
    fs: ['at ./index.rsh:36:33:application call to [unknown function] (defined at: ./index.rsh:36:33:function exp)', 'at ./index.rsh:36:33:application call to "liftedInteract" (defined at: ./index.rsh:36:33:application)', 'at ./index.rsh:69:16:application call to "showOutcome" (defined at: ./index.rsh:34:60:function exp)'],
    msg: 'showOutcome',
    who: 'Governor'
    });
  
  const v319 = stdlib.ge(v244, v243);
  const v320 = v319 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc6],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v325], secs: v327, time: v326, didSend: v176, from: v324 } = txn3;
  undefined /* setApiDetails */;
  ;
  await txn3.getOutput('Voter_showOutcome', 'v320', ctc0, v320);
  const txn4 = await (ctc.sendrecv({
    args: [v229, v243, v244, v252],
    evt_cnt: 0,
    funcNum: 4,
    lct: v326,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:76:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v334, time: v333, didSend: v186, from: v332 } = txn4;
      
      ;
      const v336 = stdlib.gt(v244, v243);
      if (v336) {
        
        }
      else {
        }
      sim_r.txns.push({
        kind: 'from',
        to: v229,
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
    tys: [ctc7, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v334, time: v333, didSend: v186, from: v332 } = txn4;
  ;
  const v335 = stdlib.addressEq(v229, v332);
  stdlib.assert(v335, {
    at: './index.rsh:76:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Governor'
    });
  const v336 = stdlib.gt(v244, v243);
  if (v336) {
    stdlib.protect(ctc4, await interact.callFunction(), {
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
  
  
  const [v229, v243, v244, v252, v320] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc1, ctc1]);
  const v323 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:73:5:application',
    fs: ['at ./index.rsh:73:5:application call to [unknown function] (defined at: ./index.rsh:73:5:function exp)'],
    msg: 'in',
    who: 'Voter_showOutcome'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v229, v243, v244, v252, v320, v323],
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
      
      
      const {data: [v325], secs: v327, time: v326, didSend: v176, from: v324 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Voter_showOutcome"
        });
      ;
      const v328 = await txn1.getOutput('Voter_showOutcome', 'v320', ctc1, v320);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v325], secs: v327, time: v326, didSend: v176, from: v324 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v328 = await txn1.getOutput('Voter_showOutcome', 'v320', ctc1, v320);
  stdlib.protect(ctc3, await interact.out(v325, v328), {
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
  
  
  const [v229, v231, v242, v243, v244, v252, v299] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v305 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:64:11:application',
    fs: ['at ./index.rsh:64:11:application call to [unknown function] (defined at: ./index.rsh:64:11:function exp)', 'at ./index.rsh:59:36:application call to [unknown function] (defined at: ./index.rsh:59:36:function exp)'],
    msg: 'in',
    who: 'Voter_showOutcome'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v229, v231, v242, v243, v244, v252, v299, v305],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:64:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v307], secs: v309, time: v308, didSend: v152, from: v306 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Voter_showOutcome"
        });
      ;
      const v310 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      const v311 = await txn1.getOutput('Voter_showOutcome', 'v310', ctc1, v310);
      
      const v487 = v243;
      const v488 = v244;
      const v489 = v308;
      const v491 = v252;
      const v492 = stdlib.gt(v242, v299);
      if (v492) {
        sim_r.isHalt = false;
        }
      else {
        const v493 = stdlib.ge(v244, v243);
        const v494 = v493 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v307], secs: v309, time: v308, didSend: v152, from: v306 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v310 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
  const v311 = await txn1.getOutput('Voter_showOutcome', 'v310', ctc1, v310);
  stdlib.protect(ctc3, await interact.out(v307, v311), {
    at: './index.rsh:64:11:application',
    fs: ['at ./index.rsh:64:11:application call to [unknown function] (defined at: ./index.rsh:64:11:function exp)', 'at ./index.rsh:65:12:application call to "k" (defined at: ./index.rsh:64:11:function exp)', 'at ./index.rsh:59:36:application call to [unknown function] (defined at: ./index.rsh:59:36:function exp)'],
    msg: 'out',
    who: 'Voter_showOutcome'
    });
  
  const v487 = v243;
  const v488 = v244;
  const v489 = v308;
  const v491 = v252;
  const v492 = stdlib.gt(v242, v299);
  if (v492) {
    return;
    }
  else {
    const v493 = stdlib.ge(v244, v243);
    const v494 = v493 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
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
  
  
  const [v229, v231, v242, v243, v244, v245, v252] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v266 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:51:32:application call to [unknown function] (defined at: ./index.rsh:51:32:function exp)', 'at ./index.rsh:51:32:application call to [unknown function] (defined at: ./index.rsh:51:32:function exp)'],
    msg: 'in',
    who: 'Voter_vote'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v229, v231, v242, v243, v244, v245, v252, v266],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [v231, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v274], secs: v276, time: v275, didSend: v101, from: v273 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Voter_vote"
        });
      const v278 = v274[stdlib.checkedBigNumberify('./index.rsh:51:12:spread', stdlib.UInt_max, '0')];
      const v280 = stdlib.add(v252, v231);
      sim_r.txns.push({
        amt: v231,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v283 = true;
      const v284 = await txn1.getOutput('Voter_vote', 'v283', ctc2, v283);
      
      const v290 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v291 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v292 = v278 ? v290 : v291;
      const v293 = v292[stdlib.checkedBigNumberify('./index.rsh:54:21:array', stdlib.UInt_max, '0')];
      const v294 = v292[stdlib.checkedBigNumberify('./index.rsh:54:21:array', stdlib.UInt_max, '1')];
      const v295 = stdlib.add(v244, v293);
      const v296 = stdlib.add(v243, v294);
      const v507 = v296;
      const v508 = v295;
      const v509 = v275;
      const v511 = v280;
      const v512 = stdlib.gt(v242, v245);
      if (v512) {
        sim_r.isHalt = false;
        }
      else {
        const v513 = stdlib.ge(v295, v296);
        const v514 = v513 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v274], secs: v276, time: v275, didSend: v101, from: v273 } = txn1;
  undefined /* setApiDetails */;
  const v278 = v274[stdlib.checkedBigNumberify('./index.rsh:51:12:spread', stdlib.UInt_max, '0')];
  const v280 = stdlib.add(v252, v231);
  ;
  const v283 = true;
  const v284 = await txn1.getOutput('Voter_vote', 'v283', ctc2, v283);
  if (v101) {
    stdlib.protect(ctc4, await interact.out(v274, v284), {
      at: './index.rsh:51:13:application',
      fs: ['at ./index.rsh:51:13:application call to [unknown function] (defined at: ./index.rsh:51:13:function exp)', 'at ./index.rsh:53:14:application call to "k" (defined at: ./index.rsh:52:36:function exp)', 'at ./index.rsh:52:36:application call to [unknown function] (defined at: ./index.rsh:52:36:function exp)'],
      msg: 'out',
      who: 'Voter_vote'
      });
    }
  else {
    }
  
  const v290 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v291 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v292 = v278 ? v290 : v291;
  const v293 = v292[stdlib.checkedBigNumberify('./index.rsh:54:21:array', stdlib.UInt_max, '0')];
  const v294 = v292[stdlib.checkedBigNumberify('./index.rsh:54:21:array', stdlib.UInt_max, '1')];
  const v295 = stdlib.add(v244, v293);
  const v296 = stdlib.add(v243, v294);
  const v507 = v296;
  const v508 = v295;
  const v509 = v275;
  const v511 = v280;
  const v512 = stdlib.gt(v242, v245);
  if (v512) {
    return;
    }
  else {
    const v513 = stdlib.ge(v295, v296);
    const v514 = v513 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
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
  appApproval: `BiARAAEHMCAoAwYEOEgI+JXWkA6Cxo7MDsHuzaAGQAUmAgEAACI1ADEYQQRLKWRJIls1ASELWzUCNhoAF0lBAFIiNQQjNQZJIQwMQAAXSSENDEAACCENEkQpQgIyIQwSRClCAFJJIQ4MQAAZIQ4SRDQBSSQMQAAGJBJEQv/jIQYSREL/1IG9m7/tBBJENhoBQgELNhoCFzUENhoDNhoBF0khCAxAAdpJIQcMQADoSSQMQABsJBJEJDQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AE3Kom3jT/ULCAEAAAAAAAAAE2AAAAAAAAAAKwgAgAAAAAAAAAAjUHNANXACA0AyEEWzQDIQVbNAMlWzQDIQlbMgY0AyEKWzQDIQ9bQgKUSCEHNAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/yEEWzX+IQVbNf0lWzX8IQlbNfshCls1+oAEYbSsDLAyBjT9D0Q0/zEAEkQ0/zT+FlA0/RZQNPwWUDT7FlA0+hZQMgYWUChLAVcAUGdIJDUBMgY1AkICrkkhEAxAAKZIIQc0ARJENARJIhJMNAISEUQoZEk1A0khBFs1/yEFWzX+STUFNf2ABFG89Lo0/VCwMgY0/gxENP+IAr2ACQAAAAAAAAEbAbCAAQE1B4AQAAAAAAAAAAAAAAAAAAAAAYAQAAAAAAAAAAEAAAAAAAAAADT9F001/DQDVwAgNP80/jQDJVs0/CELWwg0AyEJWzT8IlsIMgY0AyEPWzQDIQpbNP8IQgFxSCEINAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEkSc087A0/zEAEkSxIrIBNAMlW7III7IQNP+yB7NCAadJIwxAAMNJIQYMQAB0SCEGNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQRbNf4hBVs1/SVbNfxJNQU1+4AEyJoPuzT7ULCACAAAAAAAAAFANANXOAhQsDQDVzgINQc0/zT+FlA0/RZQNPwWUChLAVcAOGdIIQg1ATIGNQJCAUIjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8lWzX+gASai5F0sDT/MQASRDT/NAMhBFs0/jQDIQVbCCIiMgY0/iJCAGpIgaCNBogBRCI0ARJENARJIhJMNAISEURJNQVJSlcAyDX/gcgBWzX+gdABWzX9gdgBWzX8gAT5pD0fNP9QNP4WUDT9FlA0/BZQsDEANP4WUDT9FlAyBhZQKEsBVwA4Z0gjNQEyBjUCQgCQNf81/jX9Nfw1+zX6Nfk1+DT6NP4NQQAtNPg0+RZQNPoWUDT7FlA0/BZQNP0WUDT/FlAoSwFXAFBnSCEHNQEyBjUCQgBLIyI0/DT7D0019zT4NPsWUDT8FlA0/xZQNPcWUChLAVcAQGdIIQY1ATIGNQJCABwxGSEQEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem5",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes8",
                    "name": "elem6",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T1",
                "name": "v230",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v231",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v232",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v233",
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
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem5",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes8",
                    "name": "elem6",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T1",
                "name": "v230",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v231",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v232",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v233",
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
        "internalType": "struct T8",
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
                "name": "v325",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
        "internalType": "struct T8",
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
                "internalType": "struct T16",
                "name": "v274",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
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
        "internalType": "struct T8",
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
                "name": "v307",
                "type": "bool"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
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
    "name": "_reach_oe_v283",
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
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v320",
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
        "internalType": "struct T8",
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
                "name": "v325",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
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
        "internalType": "struct T8",
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
                "internalType": "struct T16",
                "name": "v274",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
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
        "internalType": "struct T8",
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
                "name": "v307",
                "type": "bool"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
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
  Bytecode: `0x608060405260405162001dd938038062001dd983398101604081905262000026916200032a565b600080554360035560408051338152825160208083019190915280840151805180518486015280830151606080860191909152818601516080808701919091528183015160a0808801919091529083015160c0808801919091529083015160e0870152909101516001600160c01b0319166101008501529181015161012084015280840151610140840152015161016082015290517f50e09ba52f0fa65841ead6f4d40db5186d8f8081aad5ee34770184489e30df12918190036101800190a1620000f434156007620001c1565b62000129604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338152602080830180518201518284015251604090810151818401524360608401819052600160008190555551620001929183910181516001600160a01b0316815260208083015190820152604080830151908201526060918201519181019190915260800190565b60405160208183030381529060405260029080519060200190620001b8929190620001eb565b5050506200044f565b81620001e75760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001f99062000412565b90600052602060002090601f0160209004810192826200021d576000855562000268565b82601f106200023857805160ff191683800117855562000268565b8280016001018555821562000268579182015b82811115620002685782518255916020019190600101906200024b565b50620002769291506200027a565b5090565b5b808211156200027657600081556001016200027b565b604080519081016001600160401b0381118282101715620002c257634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b0381118282101715620002c257634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b0381118282101715620002c257634e487b7160e01b600052604160045260246000fd5b60008183036101608112156200033f57600080fd5b6200034962000291565b83518152601f1982019150610140808312156200036557600080fd5b6200036f620002c8565b60e08412156200037e57600080fd5b62000388620002f9565b93506020860151845260408601516020850152606086015160408501526080860151606085015260a0860151608085015260c086015160a085015260e086015160018060c01b031981168114620003de57600080fd5b60c0850152928352610100850151602080850191909152610120860151604085015294015160608301529283015250919050565b600181811c908216806200042757607f821691505b602082108114156200044957634e487b7160e01b600052602260045260246000fd5b50919050565b61197a806200045f6000396000f3fe6080604052600436106100bd5760003560e01c80638f3c54f411610079578063c798003711610056578063c79800371461018e578063cfb75417146101a1578063e2186a08146101a9578063ecca1331146101bc57005b80638f3c54f414610145578063a7661d5414610158578063ab53f2c61461016b57005b80631e93b0f1146100c6578063275176aa146100ea5780632c10a1591461010d5780633c11ad4a146101205780634a5a24e114610128578063832307571461013057005b366100c457005b005b3480156100d257600080fd5b506003545b6040519081526020015b60405180910390f35b6100fd6100f83660046113c9565b6101cf565b60405190151581526020016100e1565b6100c461011b366004611403565b610201565b6100d7610225565b6100d7610254565b34801561013c57600080fd5b506001546100d7565b6100c4610153366004611403565b610283565b6100c4610166366004611403565b6102a3565b34801561017757600080fd5b506101806102c3565b6040516100e192919061141f565b6100c461019c366004611403565b610360565b6100d7610380565b6100c46101b7366004611403565b61045f565b6100c46101ca366004611403565b61047f565b60006101d961119b565b60208101515183151590526101ec6111cd565b6101f6828261049b565b606001519392505050565b6102096111cd565b61022161021b368490038401846114b3565b82610704565b5050565b600061022f6111f7565b6020810151600090526102406111cd565b61024a82826108b4565b6020015192915050565b600061025e6111f7565b60208101516000905261026f6111cd565b6102798282610aa6565b6040015192915050565b61028b6111cd565b61022161029d368490038401846115a9565b82610aa6565b6102ab6111cd565b6102216102bd368490038401846114b3565b82610c68565b6000606060005460028080546102d8906115c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610304906115c5565b80156103515780601f1061032657610100808354040283529160200191610351565b820191906000526020600020905b81548152906001019060200180831161033457829003601f168201915b50505050509050915091509091565b6103686111cd565b61022161037a368490038401846114b3565b82610dee565b600080546003148061039457506000546007145b61039d57600080fd5b6000546003141561041157306001600160a01b0316633c11ad4a6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156103e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040c91906115fa565b905090565b6000546007141561045c57306001600160a01b0316634a5a24e16040518163ffffffff1660e01b81526004016020604051808303816000875af11580156103e8573d6000803e3d6000fd5b90565b6104676111cd565b610221610479368490038401846115a9565b826108b4565b6104876111cd565b61022161049936849003840184611613565b825b6104ab6006600054146014610fd2565b81516104c69015806104bf57508251600154145b6015610fd2565b6000808055600280546104d8906115c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610504906115c5565b80156105515780601f1061052657610100808354040283529160200191610551565b820191906000526020600020905b81548152906001019060200180831161053457829003601f168201915b50505050508060200190518101906105699190611746565b9050610573611221565b610584826040015143106016610fd2565b604080513381528551602080830191909152860151515115158183015290517f9ddcaa511c27f6ad2a0e02d747762dbd9ead35a852b2e2b5c9d4e70fa7eaa5239181900360600190a16105de826020015134146013610fd2565b604051600181527f7d720a177670aa5cd5c2bf88d31f494f517f1ef59a327fe3ac74536c3297e6129060200160405180910390a1600160608401819052815181905281516000602091820181905281840180519190915251810191909152840151515161064f578060200151610652565b80515b604082015261065f611283565b825181516001600160a01b039091169052602080840151825182015260408085015183518201528301510151606084015161069a9190611762565b60208201515260408201515160808401516106b59190611762565b6020808301805182019290925281514360409091015260a085015191516060019190915283015160c08401516106eb9190611762565b6020820151608001526106fd81610ff7565b5050505050565b610714600160005414600a610fd2565b815161072f90158061072857508251600154145b600b610fd2565b600080805560028054610741906115c5565b80601f016020809104026020016040519081016040528092919081815260200182805461076d906115c5565b80156107ba5780601f1061078f576101008083540402835291602001916107ba565b820191906000526020600020905b81548152906001019060200180831161079d57829003601f168201915b50505050508060200190518101906107d29190611801565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338460405161080592919061181d565b60405180910390a161081934156008610fd2565b8051610831906001600160a01b031633146009610fd2565b610839611283565b815181516001600160a01b0390911690526020808301518251909101526040820151606083015161086a9190611762565b81516040908101919091526020808301805160009081905281519092018290528051439301929092526060808501518351909101529051608001526108ae81610ff7565b50505050565b6108c4600360005414600d610fd2565b81516108df9015806108d857508251600154145b600e610fd2565b6000808055600280546108f1906115c5565b80601f016020809104026020016040519081016040528092919081815260200182805461091d906115c5565b801561096a5780601f1061093f5761010080835404028352916020019161096a565b820191906000526020600020905b81548152906001019060200180831161094d57829003601f168201915b50505050508060200190518101906109829190611845565b90507fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e3533846040516109b59291906118c8565b60405180910390a16109c93415600c610fd2565b7f57209096aaca0ac4f1c6bda665427eb8bbf15466f961771951137541830074a081608001516040516109fe91815260200190565b60405180910390a1608081810151835260408051808301825260008082526020808301828152838501838152606080860185815289516001600160a01b0316808852858b01518552888b01518452828b01518252600490965543600155875194850195909552915195830195909552935193810193909352519282019290925260a0015b604051602081830303815290604052600290805190602001906106fd9291906112de565b610ab6600760005414601d610fd2565b8151610ad1901580610aca57508251600154145b601e610fd2565b600080805560028054610ae3906115c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610b0f906115c5565b8015610b5c5780601f10610b3157610100808354040283529160200191610b5c565b820191906000526020600020905b815481529060010190602001808311610b3f57829003601f168201915b5050505050806020019051810190610b749190611746565b90507f4e3b66664dfaa8eec55d3e4b5320be5906866b0f0eff2c9c5b88206afe3bdf8d3384604051610ba79291906118c8565b60405180910390a1610bbb3415601c610fd2565b604051600281527fa87f39f15de4cde835806b09f13e04ac3676af7db18aaae861ed76502cda6c679060200160405180910390a160028252610bfb611283565b815181516001600160a01b0390911690526020808301518251820152604080840151835182015260608085015183850180519190915260808087015182519095019490945280514393019290925260c085015182519091015260a08401519051909101526108ae81610ff7565b610c786004600054146011610fd2565b8151610c93901580610c8c57508251600154145b6012610fd2565b600080805560028054610ca5906115c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610cd1906115c5565b8015610d1e5780601f10610cf357610100808354040283529160200191610d1e565b820191906000526020600020905b815481529060010190602001808311610d0157829003601f168201915b5050505050806020019051810190610d369190611801565b90507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223384604051610d6992919061181d565b60405180910390a1610d7d3415600f610fd2565b8051610d95906001600160a01b031633146010610fd2565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610dd2573d6000803e3d6000fd5b5060008080556001819055610de990600290611362565b505050565b610dfe6006600054146019610fd2565b8151610e19901580610e1257508251600154145b601a610fd2565b600080805560028054610e2b906115c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610e57906115c5565b8015610ea45780601f10610e7957610100808354040283529160200191610ea4565b820191906000526020600020905b815481529060010190602001808311610e8757829003601f168201915b5050505050806020019051810190610ebc9190611746565b9050610ed08160400151431015601b610fd2565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3384604051610f0192919061181d565b60405180910390a1610f1534156017610fd2565b8051610f2d906001600160a01b031633146018610fd2565b610f766040518060e0016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152606080850151908401526080808501519084015260c08085015160a085015243908401819052600760005560015551610a82918391016118f2565b816102215760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815260208201516060015182516040015111156110f0576110646040518060e0016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b0316815282516020908101518183015283516040908101518184015281850180515160608501528051830151608080860191909152815183015160a08601529051015160c0840152600660005543600155516110cc918391016118f2565b604051602081830303815290604052600290805190602001906108ae9291906112de565b6020808301518051910151101561110857600161110b565b60005b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b0316808b528d88018051518852805189015187525183015184528c5182526003909855436001558a519687019790975293519885019890985290519083015294519481019490945251908301529060c0016110cc565b6040518060400160405280600081526020016111c860408051808201909152600060208201908152815290565b905290565b60405180608001604052806000815260200160008152602001600081526020016000151581525090565b6040518060400160405280600081526020016111c860405180602001604052806000151581525090565b6040805160a08101909152600060608201818152608083019190915281908152602001611261604051806040016040528060008152602001600081525090565b81526020016111c8604051806040016040528060008152602001600081525090565b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016111c86040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b8280546112ea906115c5565b90600052602060002090601f01602090048101928261130c5760008555611352565b82601f1061132557805160ff1916838001178555611352565b82800160010185558215611352579182015b82811115611352578251825591602001919060010190611337565b5061135e92915061139f565b5090565b50805461136e906115c5565b6000825580601f1061137e575050565b601f01602090049060005260206000209081019061139c919061139f565b50565b5b8082111561135e57600081556001016113a0565b803580151581146113c457600080fd5b919050565b6000602082840312156113db57600080fd5b6113e4826113b4565b9392505050565b6000604082840312156113fd57600080fd5b50919050565b60006040828403121561141557600080fd5b6113e483836113eb565b82815260006020604081840152835180604085015260005b8181101561145357858101830151858201606001528201611437565b81811115611465576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff811182821017156114ad57634e487b7160e01b600052604160045260246000fd5b60405290565b6000604082840312156114c557600080fd5b6114cd61147c565b823581526114dd602084016113b4565b60208201529392505050565b6000602082840312156114fb57600080fd5b6040516020810181811067ffffffffffffffff8211171561152c57634e487b7160e01b600052604160045260246000fd5b60405290508061153b836113b4565b905292915050565b60006040828403121561155557600080fd5b6040516040810181811067ffffffffffffffff8211171561158657634e487b7160e01b600052604160045260246000fd5b6040528235815290508061159d84602085016114e9565b60208201525092915050565b6000604082840312156115bb57600080fd5b6113e48383611543565b600181811c908216806115d957607f821691505b602082108114156113fd57634e487b7160e01b600052602260045260246000fd5b60006020828403121561160c57600080fd5b5051919050565b6000818303604081121561162657600080fd5b61162e61147c565b833581526020601f198301121561164457600080fd5b60405191506020820182811067ffffffffffffffff8211171561167757634e487b7160e01b600052604160045260246000fd5b60405261168785602086016114e9565b825260208101919091529392505050565b80516001600160a01b03811681146113c457600080fd5b600060e082840312156116c157600080fd5b60405160e0810181811067ffffffffffffffff821117156116f257634e487b7160e01b600052604160045260246000fd5b60405290508061170183611698565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201525092915050565b600060e0828403121561175857600080fd5b6113e483836116af565b6000821982111561178357634e487b7160e01b600052601160045260246000fd5b500190565b60006080828403121561179a57600080fd5b6040516080810181811067ffffffffffffffff821117156117cb57634e487b7160e01b600052604160045260246000fd5b6040529050806117da83611698565b81526020830151602082015260408301516040820152606083015160608201525092915050565b60006080828403121561181357600080fd5b6113e48383611788565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b600060a0828403121561185757600080fd5b60405160a0810181811067ffffffffffffffff8211171561188857634e487b7160e01b600052604160045260246000fd5b60405261189483611698565b8152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b6001600160a01b0383168152606081016113e4602083018480518252602090810151511515910152565b81516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0918201519181019190915260e0019056fea26469706673582212207f1a0ed0292f265fa1e96ab3687157c855ec806764be47fefd280bc8352fab6164736f6c634300080c0033`,
  BytecodeLen: 7641,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:42:11:after expr stmt semicolon',
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
    at: './index.rsh:48:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:61:11:after expr stmt',
    fs: ['at ./index.rsh:59:36:application call to [unknown function] (defined at: ./index.rsh:59:36:function exp)'],
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
