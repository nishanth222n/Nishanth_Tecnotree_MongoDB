User {
    "user_id",
     "user_name",
     "user_email"
  }

  //one user can post many movies
  
  Movie {
     "movie_id",
     "movie_name",
     "actor_name",
     "ratings"
  }
  
//one movie can have many comments

  Comments {
      "user_id",
      "movie_id",
      "comment"
  }


// Optimizing the schema

{
    "users":[{
        "user_id":01,
        "user_name":Nishanth,
        "user_email":nishanth222n@gmail.com
    }
    ],
    "Movie":[{
        "movie_id":1234,
        "movie_name":Appu,
        "actor_name":Dr.Puneeth Rajkumar,
        "ratings":5
    }
    ],
    "Comments":[{
        "user_id":01,
        "movie_id"1234,
        "comments":Super
    }]

}

 