const graphql = require("graphql");
const _ = require("lodash");
const Book = require("../models/book");
const Author = require("../models/author");
const Types = require("../models/types");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = graphql;

// Books DB
// var books = [
//   {name: "Name of the Wind", genre: "Fantasy", id: "1", authorId: "1"},
//   {name: "The Notebook", genre: "Rom", id: "2", authorId: "2"},
//   {name: "The Hangover", genre: "Com", id: "3", authorId: "3"},
//   {name: "Star Wars", genre: "Fantasy", id: "4", authorId: "2"},
//   {name: "The Vow", genre: "Rom", id: "5", authorId: "3"},
//   {name: "Long Shot", genre: "Com", id: "6", authorId: "3"}
// ];

// Relation b/w BookType and AuthorType.
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    genre: {type: GraphQLString},
    author: {
      type: AuthorType,
      resolve(parent, args) {
        console.log(parent);
        // return _.find(authors, {id: parent.authorId});
        return Author.findById(parent.authorId);
      }
    }
  })
});

// Author DB
// var authors = [
//   {name: "First Author", age: 44, id: "1"},
//   {name: "Second Author", age: 45, id: "2"},
//   {name: "Third Author", age: 64, id: "3"}
// ];

// Relation between AuthorType and a GraphQL List of BookType.
const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // return _.filter(books, {authorId: parent.id});
        return Book.find({authorId: parent.id});
      }
    }
  })
});

const pokemon_typesType = new GraphQLObjectType({
  name: "Types",
  fields: () => ({
    english: {type: GraphQLString},
    chinese: {type: GraphQLString},
    japanese: {type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // 1. Query & get a book. (One argument required).
    book: {
      type: BookType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        // Grab data from DB with lodash
        // return _.find(books, {id: args.id});
        return Book.findById(args.id);
      }
    },
    // 2. Query & Get an Author (One argument Required).
    author: {
      type: AuthorType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
        // Grab data from DB with lodash
        // return _.find(authors, {id: args.id});
        return Author.findById(args.id);
      }
    },
    // 3. Get All Books (No Argument Required)
    books: {
      // Get a List
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // Grab data from DB with lodash
        // REturn database Variable
        // return books;
        return Book.find({});
      }
    },
    //4. Get all Authors (No Argument Required)
    authors: {
      // Get a List
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        // Grab all the data from DB with lodash
        // REturn database Variable
        // return authors;
        return Author.find({});
      }
    },
    types: {
      type: new GraphQLList(pokemon_typesType),
      resolve(parents, args) {
        // console.log("start");
        // console.log("Finish");
        return Types.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // 1. Add a Author. (Two aregument required)
    addAuthor: {
      type: AuthorType,
      args: {
        name: {type: GraphQLNonNull(GraphQLString)},
        age: {type: GraphQLNonNull(GraphQLInt)}
      },
      resolve(parent, args) {
        let author = new Author({
          name: args.name,
          age: args.age
        });
        return author.save();
      }
    },

    // 2. Add a Book. (Three argument required.)
    addBook: {
      type: BookType,
      args: {
        name: {type: GraphQLNonNull(GraphQLString)},
        genre: {type: GraphQLNonNull(GraphQLString)},
        authorId: {type: GraphQLNonNull(GraphQLID)}
      },
      resolve(parent, args) {
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId
        });
        return book.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
