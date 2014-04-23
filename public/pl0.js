/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var pl0 = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"block":4,"DOT":5,"EOF":6,"block_const":7,"block_vars":8,"block_procs":9,"statement":10,"CONST":11,"ID":12,"=":13,"NUMBER":14,"block_const_ids":15,"SEMICOLON":16,"COMMA":17,"VAR":18,"block_vars_id":19,"PROCEDURE":20,"functionname":21,"block_procs_parameters":22,"(":23,"block_procs_parameters_ids":24,")":25,"expression":26,"CALL":27,"statement_call_arguments":28,"BEGIN":29,"statement_begin_st":30,"END":31,"IF":32,"condition":33,"THEN":34,"ELSE":35,"WHILE":36,"DO":37,"statement_call_arguments_ids":38,"ODD":39,"COMPARISON":40,"+":41,"-":42,"*":43,"/":44,"$accept":0,"$end":1},
terminals_: {2:"error",5:"DOT",6:"EOF",11:"CONST",12:"ID",13:"=",14:"NUMBER",16:"SEMICOLON",17:"COMMA",18:"VAR",20:"PROCEDURE",23:"(",25:")",27:"CALL",29:"BEGIN",31:"END",32:"IF",34:"THEN",35:"ELSE",36:"WHILE",37:"DO",39:"ODD",40:"COMPARISON",41:"+",42:"-",43:"*",44:"/"},
productions_: [0,[3,3],[4,4],[7,6],[7,0],[15,5],[15,0],[8,4],[8,0],[19,3],[19,0],[9,7],[9,0],[21,1],[22,5],[22,2],[22,0],[24,4],[24,0],[10,3],[10,3],[10,4],[10,4],[10,6],[10,4],[10,0],[28,4],[28,4],[28,2],[28,0],[38,3],[38,3],[38,0],[30,3],[30,0],[33,2],[33,3],[26,3],[26,3],[26,3],[26,3],[26,2],[26,3],[26,1],[26,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
	    this.$ = [{table: symbolsToString()}].concat($$[$0-2]);
            reset();
	    return this.$;
	  
break;
case 2:
	    this.$ = [];
		
		if($$[$0-1]) this.$ = this.$.concat($$[$0-1])
		
		if(this.$.length > 0)
		  this.$ = [this.$];
		
		if($$[$0])
		  this.$ = this.$.concat($$[$0]);
	  
break;
case 3:
	      symbolTable.vars[$$[$0-4]] = { type: "CONST", value: $$[$0-2] }
	      this.$ = [{ type: $$[$0-5], id: $$[$0-4], value: $$[$0-2] }];
		  if($$[$0-1]) this.$ = this.$.concat($$[$0-1]);
	    
break;
case 4:
	      this.$ = [];
	    
break;
case 5:
		  symbolTable.vars[$$[$0-3]] = { type: "CONST", value: $$[$0-1] }
		  this.$ = [{ type: "CONST", id: $$[$0-3], value: $$[$0-1] }];
		  if($$[$0]) this.$ = this.$.concat($$[$0]);
		
break;
case 6:
	    this.$ = [];
	  
break;
case 7:	
		symbolTable.vars[$$[$0-2]] = { type: "VAR", value: "" }
		this.$ = [{ type: $$[$0-3], value: $$[$0-2] }];
		if($$[$0-1]) this.$ = this.$.concat($$[$0-1]);
	  
break;
case 8:
		  this.$ = [];
		
break;
case 9:
		  symbolTable.vars[$$[$0-1]] = { type: "VAR", value: "" }
		  this.$ = [{ type: "VAR", value: $$[$0-1] }];
		  if($$[$0]) this.$ = this.$.concat($$[$0]);
		
break;
case 10:
		  this.$ = [];
		
break;
case 11:
		  getFormerScope();
                 
		  this.$ = [{type: $$[$0-6], id: $$[$0-5], parameters: $$[$0-4], block: $$[$0-2], table: symbolsToString()}];
		  if($$[$0]) this.$ = this.$.concat($$[$0]);


		
break;
case 12:
		  this.$ = [];
		
break;
case 13:
                   if (symbolTable.vars[$$[$0]]) 
                     throw new Error("Función "+$$[$0]+" definida dos veces");
                   symbolTable.vars[$$[$0]] = { type: "PROCEDURE", name: $$[$0] };

                   makeNewScope($$[$0]);

                   this.$ = $$[$0];
                
break;
case 14:
		  this.$ = [{type: 'ID', value: $$[$0-2]}].concat($$[$0-1]);
		
break;
case 15:
		  this.$ = [];
		
break;
case 16:
		  this.$ = [];
		
break;
case 17:
		   this.$ = [{type: 'ID', value: $$[$0-1]}].concat($$[$0]);
		
break;
case 18:
		  this.$ = [];
		
break;
case 19:
           var info = findSymbol($$[$0-2]);
           var s = info[1];
           info = info[0];

           if (info && info.type === "VAR") { 
             this.$ = {type: $$[$0-1], left: $$[$0-2], right: $$[$0], belongs_to: symbolTable[s].name};
           }
           else if (info && info.type === "PARAM") { //Parametro 
             this.$ = {type: $$[$0-1], left: $$[$0-2], right: $$[$0], belongs_to: symbolTable[s].name};
           }
	   else if (info && info.type === "CONST") { 
              throw new Error("Symbol "+$$[$0-2]+" refers to a constant");
           }
           else if (info && info.type === "PROCEDURE") { 
              throw new Error("Symbol "+$$[$0-2]+" refers to a function");
           }
           else { 
              throw new Error("Symbol "+$$[$0-2]+" not declared");
	   }
	  
break;
case 20:
	   var info = findSymbol($$[$0-1]);
           var s = info[1];
           info = info[0];

           if (info && info.type === "VAR") { 
              throw new Error("Symbol "+$$[$0-1]+" refers to a variable");
           }
           else if (info && info.type === "PARAM") { //Parametro 
              throw new Error("Symbol "+$$[$0-1]+" refers to a parameter");
           }
	   else if (info && info.type === "CONST") { 
              throw new Error("Symbol "+$$[$0-1]+" refers to a constant");
           }
           else if (info && info.type === "PROCEDURE") { 
              this.$ = {type: $$[$0-2], id: $$[$0-1], arguments: $$[$0]};
           }
           else { 
              throw new Error("Symbol "+$$[$0-1]+" not declared");
	   }
	  
break;
case 21:
	    this.$ = {type: $$[$0-3], value: [$$[$0-2]].concat($$[$0-1])};
	  
break;
case 22:
	    this.$ = {type: $$[$0-3], condition: $$[$0-2], statement: $$[$0]};
	  
break;
case 23:
	    this.$ = {type: "IFELSE", condition: $$[$0-4], statement_true: $$[$0-2], statement_false: $$[$0]};
	  
break;
case 24:
	    this.$ = {type: $$[$0-3], condition: $$[$0-2], statement: $$[$0]};
	  
break;
case 25:
	    this.$ = [];
	  
break;
case 26:
		  this.$ = [{type: 'ID', value: $$[$0-2]}].concat($$[$0-1]);
		
break;
case 27:
		  this.$ = [{type: 'NUMBER', value: $$[$0-2]}].concat($$[$0-1]);
		
break;
case 28:
		  this.$ = [];
		
break;
case 29:
		  this.$ = [];
		
break;
case 30:
		   this.$ = [{type: 'ID', value: $$[$0-1]}].concat($$[$0]);
		
break;
case 31:
		  this.$ = [{type: 'NUMBER', value: $$[$0-1]}].concat($$[$0]);
		
break;
case 32:
		  $ = [];
		
break;
case 33:
		  // Posibles problemas de compatibilidad con IE < 9
		  aux = $$[$0-1];
		  if(Object.keys(aux).length == 0)
		    this.$ = [];
		  else
		    this.$ = [$$[$0-1]];
			
		  if($$[$0]) this.$ = this.$.concat($$[$0])
		
break;
case 34:
		  this.$ = [];
		
break;
case 35:
	    this.$ = {type: $$[$0-1], value: $$[$0]};
	  
break;
case 36:
	    this.$ = {type: $$[$0-1], left: $$[$0-2], right: $$[$0]};
	  
break;
case 37:
	    this.$ = {type: $$[$0-1], left: $$[$0-2], right: $$[$0]};
	  
break;
case 38:
	    this.$ = {type: $$[$0-1], left: $$[$0-2], right: $$[$0]};
	  
break;
case 39:
	    this.$ = {type: $$[$0-1], left: $$[$0-2], right: $$[$0]};
	  
break;
case 40:
	    this.$ = {type: $$[$0-1], left: $$[$0-2], right: $$[$0]};
	  
break;
case 41:
	    this.$ = {type: $$[$0-1], value: $$[$0]};
	  
break;
case 42:
	    this.$ = $$[$0-1];
	  
break;
}
},
table: [{3:1,4:2,5:[2,4],7:3,11:[1,4],12:[2,4],18:[2,4],20:[2,4],27:[2,4],29:[2,4],32:[2,4],36:[2,4]},{1:[3]},{5:[1,5]},{5:[2,8],8:6,12:[2,8],16:[2,8],18:[1,7],20:[2,8],27:[2,8],29:[2,8],32:[2,8],36:[2,8]},{12:[1,8]},{6:[1,9]},{5:[2,12],9:10,12:[2,12],16:[2,12],20:[1,11],27:[2,12],29:[2,12],32:[2,12],36:[2,12]},{12:[1,12]},{13:[1,13]},{1:[2,1]},{5:[2,25],10:14,12:[1,15],16:[2,25],27:[1,16],29:[1,17],32:[1,18],36:[1,19]},{12:[1,21],21:20},{16:[2,10],17:[1,23],19:22},{14:[1,24]},{5:[2,2],16:[2,2]},{13:[1,25]},{12:[1,26]},{10:27,12:[1,15],16:[2,25],27:[1,16],29:[1,17],31:[2,25],32:[1,18],36:[1,19]},{12:[1,33],14:[1,34],23:[1,32],26:30,33:28,39:[1,29],42:[1,31]},{12:[1,33],14:[1,34],23:[1,32],26:30,33:35,39:[1,29],42:[1,31]},{16:[2,16],22:36,23:[1,37]},{16:[2,13],23:[2,13]},{16:[1,38]},{12:[1,39]},{15:40,16:[2,6],17:[1,41]},{12:[1,33],14:[1,34],23:[1,32],26:42,42:[1,31]},{5:[2,29],16:[2,29],23:[1,44],28:43,31:[2,29],35:[2,29]},{16:[1,46],30:45,31:[2,34]},{34:[1,47]},{12:[1,33],14:[1,34],23:[1,32],26:48,42:[1,31]},{40:[1,49],41:[1,50],42:[1,51],43:[1,52],44:[1,53]},{12:[1,33],14:[1,34],23:[1,32],26:54,42:[1,31]},{12:[1,33],14:[1,34],23:[1,32],26:55,42:[1,31]},{5:[2,43],16:[2,43],25:[2,43],31:[2,43],34:[2,43],35:[2,43],37:[2,43],40:[2,43],41:[2,43],42:[2,43],43:[2,43],44:[2,43]},{5:[2,44],16:[2,44],25:[2,44],31:[2,44],34:[2,44],35:[2,44],37:[2,44],40:[2,44],41:[2,44],42:[2,44],43:[2,44],44:[2,44]},{37:[1,56]},{16:[1,57]},{18:[1,58],25:[1,59]},{5:[2,7],12:[2,7],16:[2,7],20:[2,7],27:[2,7],29:[2,7],32:[2,7],36:[2,7]},{16:[2,10],17:[1,23],19:60},{16:[1,61]},{12:[1,62]},{5:[2,19],16:[2,19],31:[2,19],35:[2,19],41:[1,50],42:[1,51],43:[1,52],44:[1,53]},{5:[2,20],16:[2,20],31:[2,20],35:[2,20]},{12:[1,63],14:[1,64],25:[1,65]},{31:[1,66]},{10:67,12:[1,15],16:[2,25],27:[1,16],29:[1,17],31:[2,25],32:[1,18],36:[1,19]},{5:[2,25],10:68,12:[1,15],16:[2,25],27:[1,16],29:[1,17],31:[2,25],32:[1,18],35:[2,25],36:[1,19]},{34:[2,35],37:[2,35],41:[1,50],42:[1,51],43:[1,52],44:[1,53]},{12:[1,33],14:[1,34],23:[1,32],26:69,42:[1,31]},{12:[1,33],14:[1,34],23:[1,32],26:70,42:[1,31]},{12:[1,33],14:[1,34],23:[1,32],26:71,42:[1,31]},{12:[1,33],14:[1,34],23:[1,32],26:72,42:[1,31]},{12:[1,33],14:[1,34],23:[1,32],26:73,42:[1,31]},{5:[2,41],16:[2,41],25:[2,41],31:[2,41],34:[2,41],35:[2,41],37:[2,41],40:[2,41],41:[2,41],42:[2,41],43:[2,41],44:[2,41]},{25:[1,74],41:[1,50],42:[1,51],43:[1,52],44:[1,53]},{5:[2,25],10:75,12:[1,15],16:[2,25],27:[1,16],29:[1,17],31:[2,25],32:[1,18],35:[2,25],36:[1,19]},{4:76,7:3,11:[1,4],12:[2,4],16:[2,4],18:[2,4],20:[2,4],27:[2,4],29:[2,4],32:[2,4],36:[2,4]},{12:[1,77]},{16:[2,15]},{16:[2,9]},{5:[2,3],12:[2,3],16:[2,3],18:[2,3],20:[2,3],27:[2,3],29:[2,3],32:[2,3],36:[2,3]},{13:[1,78]},{17:[1,80],25:[2,32],38:79},{17:[1,80],25:[2,32],38:81},{5:[2,28],16:[2,28],31:[2,28],35:[2,28]},{5:[2,21],16:[2,21],31:[2,21],35:[2,21]},{16:[1,46],30:82,31:[2,34]},{5:[2,22],16:[2,22],31:[2,22],35:[1,83]},{34:[2,36],37:[2,36],41:[1,50],42:[1,51],43:[1,52],44:[1,53]},{5:[2,37],16:[2,37],25:[2,37],31:[2,37],34:[2,37],35:[2,37],37:[2,37],40:[2,37],41:[2,37],42:[2,37],43:[1,52],44:[1,53]},{5:[2,38],16:[2,38],25:[2,38],31:[2,38],34:[2,38],35:[2,38],37:[2,38],40:[2,38],41:[2,38],42:[2,38],43:[1,52],44:[1,53]},{5:[2,39],16:[2,39],25:[2,39],31:[2,39],34:[2,39],35:[2,39],37:[2,39],40:[2,39],41:[2,39],42:[2,39],43:[2,39],44:[2,39]},{5:[2,40],16:[2,40],25:[2,40],31:[2,40],34:[2,40],35:[2,40],37:[2,40],40:[2,40],41:[2,40],42:[2,40],43:[2,40],44:[2,40]},{5:[2,42],16:[2,42],25:[2,42],31:[2,42],34:[2,42],35:[2,42],37:[2,42],40:[2,42],41:[2,42],42:[2,42],43:[2,42],44:[2,42]},{5:[2,24],16:[2,24],31:[2,24],35:[2,24]},{16:[1,84]},{17:[1,86],24:85,25:[2,18]},{14:[1,87]},{25:[1,88]},{12:[1,89],14:[1,90]},{25:[1,91]},{31:[2,33]},{5:[2,25],10:92,12:[1,15],16:[2,25],27:[1,16],29:[1,17],31:[2,25],32:[1,18],35:[2,25],36:[1,19]},{5:[2,12],9:93,12:[2,12],16:[2,12],20:[1,11],27:[2,12],29:[2,12],32:[2,12],36:[2,12]},{25:[1,94]},{18:[1,95]},{15:96,16:[2,6],17:[1,41]},{5:[2,26],16:[2,26],31:[2,26],35:[2,26]},{17:[1,80],25:[2,32],38:97},{17:[1,80],25:[2,32],38:98},{5:[2,27],16:[2,27],31:[2,27],35:[2,27]},{5:[2,23],16:[2,23],31:[2,23],35:[2,23]},{5:[2,11],12:[2,11],16:[2,11],27:[2,11],29:[2,11],32:[2,11],36:[2,11]},{16:[2,14]},{12:[1,99]},{16:[2,5]},{25:[2,30]},{25:[2,31]},{17:[1,86],24:100,25:[2,18]},{25:[2,17]}],
defaultActions: {9:[2,1],59:[2,15],60:[2,9],82:[2,33],94:[2,14],96:[2,5],97:[2,30],98:[2,31],100:[2,17]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

	var symbolTables = [{name: "Global", father: null, vars: {}}]; //Tabla de simbolos global
	var scope = 0;
	var symbolTable = symbolTables[scope]; //Tabla de simbolos actual

	function getScope() {
  		return scope;
	}

	function getFormerScope() {
   		scope--;
   		symbolTable = symbolTables[scope];
	}

	function makeNewScope(id) { // En cada declaracion de procedimiento poner esto
   		scope++;
                symbolTables[scope] =  { name: id, father: symbolTable, vars: {} };
   		symbolTable.vars[id].symbolTable = symbolTables[scope];
   		symbolTable = symbolTables[scope];
   		return symbolTable;
	}
	function findSymbol(x) {
  		var f;
  		var s = scope;
  		do {
    			f = symbolTables[s].vars[x];
    			s--;
  		} while (s >= 0 && !f);
  		s++;
  		return [f, s];
	}
	function symbolsToString(){
		symbols = [];
		for(var key in symbolTable.vars) {
	              symbols.push({id: key, type: symbolTable.vars[key].type, value: symbolTable.vars[key].value});
            	};
		return symbols;
	}
	function reset(){
	  symbolTables = [{name: "Global", father: null, vars: {}}]; //Tabla de simbolos global
	  scope = 0;
	  symbolTable = symbolTables[scope]; //Tabla de simbolos actual
	}

//makenewscope = cuando entramos en un ambito
//getformerscope = cuando salimos de un ambito
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var reserved_words ={ PROCEDURE : 'PROCEDURE', CALL : 'CALL', CONST : 'CONST', VAR : 'VAR', BEGIN : 'BEGIN', END : 'END', WHILE : 'WHILE', DO : 'DO', ODD : 'ODD', IF : 'IF', THEN : 'THEN', ELSE : 'ELSE' }

function idORrw(x) {
  return (x.toUpperCase() in reserved_words)? x.toUpperCase() : 'ID'
}


var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace and comments */
break;
case 1:return 16
break;
case 2:return 5
break;
case 3:return 17
break;
case 4:return 40
break;
case 5:return 14
break;
case 6:return idORrw(yy_.yytext)
break;
case 7:return yy_.yytext;
break;
case 8:return 6
break;
case 9:return 'INVALID'
break;
}
},
rules: [/^(?:\s+|#.*)/,/^(?:[;])/,/^(?:\.)/,/^(?:[,])/,/^(?:(==|!=|<=|<|>=|>))/,/^(?:\b\d+(\.\d*)?([eE][-+]?\d+)?\b)/,/^(?:\b[A-Za-z_]\w*\b)/,/^(?:[-*/+^!%=();])/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = pl0;
exports.Parser = pl0.Parser;
exports.parse = function () { return pl0.parse.apply(pl0, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}