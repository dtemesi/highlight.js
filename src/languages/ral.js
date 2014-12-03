/*
Language: RAL
Author: Daniel Temesi <daniel.temesi@gmail.com>
Origin: coffeescript.js
Description: RAL (Risk Analysis Language) is a language that describes every aspect of the RMS(one) platform, from infrastructure and admin, to defining and creating exposures, models, and workflows, all the way up to analytics on positions. For info about language see http://www.rms.com/
Category: risk
*/

function(hljs) {
  var COMMENT_MODE = {
    className: 'comment',
    begin: '//', end: '$'
  };
  return {
    case_insensitive: true,
    aliases:['ral'],
    illegal: /[<>]/,
    contains: [
      {
        className: 'operator',
        beginKeywords:
            'book contract create delete entity insert positionexpressions risk schedule structure update',
        end: /;/, endsWithParent: true,
        keywords: {
          keyword:
            'aal aep aggregate aggregate and as book by by contract covers create declarations '+
            'deductible deductibles entity expiration extends for from group having inception insert '+
            'into is join oep on or positionexpressions risk schedule set settings share status stddev '+
            'structure subject year primary key tasksettingsto to type type update use useing workflow not where with xs',
          literal:
            'true false null',
          built_in:
            'array bigint binary bit blob boolean char character coordinate date dec decimal float int integer interval money number ' +
            'numeric real serial smallint varchar varying int8 serial8 text'
        },
        contains: [
          {
            className: 'string',
            begin: '\'', end: '\'',
            contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}]
          },
          {
            className: 'string',
            begin: '"', end: '"',
            contains: [hljs.BACKSLASH_ESCAPE, {begin: '""'}]
          },
          {
            className: 'string',
            begin: '`', end: '`',
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          hljs.C_NUMBER_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          COMMENT_MODE
        ]
      },
      hljs.C_BLOCK_COMMENT_MODE,
      COMMENT_MODE
    ]
  };
}
