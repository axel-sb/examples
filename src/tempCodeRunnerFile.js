const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe',
    },
}

function userId({id}) {
  return id;
}

console.log(userId(user)); // 42

console.log(user.id)

userId()

console.log(id)