const { schema, imports, dependencies, environment, expressions, endpoints } = program;

environment
  .add('AIRTABLE_API_KEY', 'The API TOKEN')
  .add('AIRTABLE_ID', 'The Airtable Id')

schema.type('Root')
  .computed('table', 'Table')
    .param('name', 'String')

schema.type('Table')
  .computed('name', 'String')
  .computed('records','RecordCollection')
  .action('createRecord')
    .param('fields', 'String')
  .action('deleteRecord')
    .param('id', 'String')
  .action('updateRecord')
    .param('id', 'String')
    .param('fields', 'String')

schema.type('RecordCollection')
  .computed('one', 'Record')
    .param('id', 'String')
  .computed('page', 'RecordPage')
      .param('fields','[String]')
      .param('filterByFormula','String')
      .param('maxRecords','Int')
      .param('pageSize','Int')
      .param('sort','String')
      .param('view','String')
      .param('cellFormat','String')
      .param('timeZone','String')
      .param('userLocale','String')

schema.type('RecordPage')
  .computed('items', '[Record]')
  .computed('next', 'RecordPage*')

schema.type('Record')
  .computed('self', 'Record*')
  .field('id', 'String')
  .computed('fields', 'String')
  .field('createdTime','String')