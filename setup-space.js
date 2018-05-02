#!/usr/bin/env node
'use strict';

const program = require('commander');
const spaceImport = require('contentful-import');
const {createClient} = require('contentful-management');
const spaceData = require('./space.json');

program
  .option('--management-token <token>', 'Your Contentful management token')
  .option('--organization-id <id>', 'If you have more than one Contentful organization, the ID of the organization to create a new space in')
  .option('--space-id <id>', 'If you already have a space, ID of the space to import the data in')
  .parse(process.argv);

if (!program.managementToken) {
  console.log('You need to specify your management token using "--management-token"');
  process.exit();
}

const accessToken = program.managementToken;
const organizationId = program.organizationId ? program.organizationId : undefined;
const spaceId = program.spaceId ? program.spaceId : undefined;

function createSpace(accessToken) {
  const client = createClient({accessToken});

  return client.createSpace({name: 'Super Chemex Bot'}, organizationId)
    .then(space => space.sys.id);
}

spaceId ? Promise.resolve(spaceId) : createSpace(accessToken)
  .then(spaceId => {
    spaceImport({
      content: spaceData,
      spaceId: spaceId,
      managementToken: accessToken
    })
  })
  .then(msg => console.log(msg))
  .catch(err => console.error(err));
