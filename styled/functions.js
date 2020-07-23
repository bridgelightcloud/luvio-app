function printMyName(name, name2) {
  console.log('runnung printMyName');
  console.log('My name is', name, name2);
}

function makeFullName(firstName, lastName) {
  console.log('running makeFullName');
  return `${firstName} ${lastName}`;
}

printMyName(
  makeFullName('Matt', 'Neal'),
  'the best of all',
);
