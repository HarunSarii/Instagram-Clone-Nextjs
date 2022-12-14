import React, { useEffect, useState } from 'react'
import Story from './Story'
import { faker } from '@faker-js/faker';
import { useSession } from 'next-auth/react';

export const USERS = [];

export function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

Array.from({ length: 20 }).forEach(() => {
  USERS.push(createRandomUser());
});


const Stories = () => {

  const { data: session } = useSession();

  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = USERS
    setSuggestions(suggestions)
  }, []);

  return (
    <div className='flex space-x-2 p-6 mt-8 bg-white border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black' >
      {session && (
        <Story
          img={session.user?.image}
          username={session.user?.username}
        />
      )}
      {suggestions.map(profile => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username} />
      ))}
    </div>
  )
}

export default Stories