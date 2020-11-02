import axios from "axios";

export const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await axios.get("https://api.github.com/users");
        return users.data.map(({ id, login, avatar_url }) => ({
          id,
          login,
          avatar_url
        }));
      } catch (error) {
        throw error;
      }
    },
    getPersons: async () => {
      try {
        const persons = await axios.get("https://reqres.in/api/users?page=2");
        return persons.data.data.map(({ id, email, firstname, lastname, avatar_url }) => ({
          id,
          email, 
          firstname,
          lastname,
          avatar_url
        }));
      } catch (error) {
        throw error;
      }
    },
    getUser: async (_, args) => {
      try {
        const user = await axios.get(
          `https://api.github.com/users/${args.name}`
        );
        return {
          id: user.data.id,
          login: user.data.login,
          avatar_url: user.data.avatar_url
        };
      } catch (error) {
        throw error;
      }
    },
    getPerson: async (_, args) => {
      try {
        const person = await axios.get(
          `https://reqres.in/api/users/${args.id}`
        );
        return {
          id: person.data.data.id,
          email: person.data.data.email,
          firstname: person.data.data.first_name,
          lastname: person.data.data.last_name,
          avatar_url: person.data.data.avatar
        };
      } catch (error) {
        throw error;
      }
    }
  }
};