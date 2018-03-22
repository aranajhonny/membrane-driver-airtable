const { schema, imports, dependencies, environment, expressions, endpoints } = program;

environment
  .add('API_KEY', 'The API TOKEN')
  .add('AIRTABLE_ID', 'The Airtable Id')

//expressions
//  .add('url', '^https://airtable.com/.+$')

schema.type('Root')
  .computed('records', 'RecordsCollection')

schema.type('RecordsCollection')
  .computed('one', 'RecordItem')
    .param('id', 'String', 'Record id')
    .param('table', 'String', 'The table of the airtable')
  .computed('items', '[RecordItem]')
    .param('table', 'String', 'The table of the airtable')

schema.type('RecordItem')
  .computed('self', 'RecordItem*')
  .field('records', '[Record]')
  .field('offset', 'String')

schema.type('Record')
  .computed('self', 'Record*')
  .field('id', 'String')
  .computed('fields', 'String')
  .field('createdTime','String')