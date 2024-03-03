const { userlist , movielist } = require('../database');
const _ = require('lodash');


const resolvers = {
    Query: {
        hello: () =>{ return 'Hello World!' },
        users() {
            return userlist;
        },
        user: (parent,args) =>{
            const id = args.id;
            const user = _.find(userlist, { id });
            return user;
        },
        movies: () =>{
            return movielist
        },
        movie: (parent, args) =>{
            const name = args.name;
            const movie = _.find(movielist, { name });
            return movie;
        }
    },

    Mutation: {
      createUser: (parent , args) =>{
        const user = args.input;
        const lastId = userlist[userlist.length - 1].id
        user.id = Number (lastId) + 1;
        userlist.push(user);
        return user;
      },
      updateUserName: (parent, args) =>{
        const { id , newUsername , newName} = args.input;
        const user = _.find(userlist , { id })
        user.username = newUsername;
        user.name = newName
        // let userUpdate;
        // userlist.forEach((user) =>{
        //     if(user.id === id){
        //         user.name = newUsername;
        //         userUpdate = user;
        //     }
        // })
        return user;

      },
      deleteUser: (parent, args ) =>{
        const id = args.id;
        _.remove(userlist, (user) => user.id === id)

        // let userUpdate;
        // userlist.forEach((user) =>{
        //     if(user.id === id){
        //         userUpdate = user;
        //         user = null;
        //     }
        // })
        return null;
      }
    },

    User: {
        // friend: () =>{
        //     return _.filter
        // }
        favouriteMovie: () =>{
            return _.filter(movielist, (movie) => movie.releaseDate >= 2010)
        }
    }
}

module.exports = { resolvers };