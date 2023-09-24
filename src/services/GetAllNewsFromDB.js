import DbConnect from './DbConnect';
import { ObjectId } from 'mongodb';

export const GetAllNewsFromDB = async () => {
    try {
        const db = await DbConnect();
        const allNews = db.collection('all-news');
        const result = await allNews.find().toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};
export const GetCategoryDataFromDB = async (category) => {
    try {
        const query = { category: category };
        const db = await DbConnect();
        const allNews = db.collection('all-news');
        const result = await allNews.find(query).toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};
export const GetSingleNewsFromDB = async (id) => {
    try {
        const ids = id;
        const db = await DbConnect();
        const allNews = db.collection('all-news');
        const query = { _id: new ObjectId(ids) }
        const result = await allNews.findOne(query)
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};
export const GetSubcategoryFromDb = async (subCategories) => {
    try {
        const subcategory = subCategories
        const query = { subcategory: subcategory };
        const db = await DbConnect();
        const allNews = db.collection('all-news');
        const result = await allNews.find(query).toArray();
        return result
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};
export const GetAllUsersFromDB = async () => {
    try {
        const db = await DbConnect();
        const allUsers = db.collection('all-users');
        const result = await allUsers.find().toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};

export const GetAllReportersFromDB = async () => {
    try {
        const db = await DbConnect();
        const allUsers = db.collection('all-users');
        const query = { role: "reporter" }
        const result = await allUsers.find(query).toArray();
        // console.log(result.length);
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
}
export const GetAllEmployersFromDB = async () => {
    try {
        const db = await DbConnect();
        const allUsers = db.collection('all-users');
        const query = { role: "employer" }
        const result = await allUsers.find(query).toArray();
        // console.log(result.length);
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
}
export const GetAllModeratorsFromDB = async () => {
    try {
        const db = await DbConnect();
        const allUsers = db.collection('all-users');
        const query = { role: "moderator" }
        const result = await allUsers.find(query).toArray();
        // console.log(result.length);
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
}

export const GetPendingNewsFromDB = async () => {
    try {
        const db = await DbConnect();
        const allNews = db.collection('all-news');
        const query = { status: "pending" };
        const result = await allNews.find(query).toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
}

// jobs get data 
export const GetAllJobsFromDB = async () => {
    try {
        const db = await DbConnect();
        const allJobs = db.collection('all-jobs');
        const result = await allJobs.find().toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
}
export const GetCategoryJobsFromDB = async (category) => {
    try {
        const query = { category: category };
        const db = await DbConnect();
        const allJobs = db.collection('all-jobs');
        const result = await allJobs.find(query).toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get job' });
    }
};
export const GetLocationJobsFromDB = async (location) => {
    try {
        if (!location) {
            return "wait";
        }
        const query = { jobLocation: location };
        console.log(location);
        const db = await DbConnect();
        const allJobs = db.collection('all-jobs');
        const result = await allJobs.find(query).toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get job' });
    }
};
export const GetSingleJobsFromDB = async (id) => {
    try {
        if (!id) {
            return "wait";
        }
        const db = await DbConnect();
        const allJobs = db.collection('all-jobs');
        const query = { jobId: parseInt(id) }
        // console.log(query);
        const result = await allJobs.findOne(query)
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};

// community posts get api's 
export const GetAllPostsFromDB = async () => {
    try {
        const db = await DbConnect();
        const allPosts = db.collection('all-posts');
        const result = await allPosts.find().toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};
export const GetSinglePostFromDB = async (id) => {
    try {
        const db = await DbConnect();
        const allPosts = db.collection('all-posts');
        const query = { postId: id }
        const result = await allPosts.findOne(query);
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};

// moderator get data
// all data  
export const GetAllBooksFromDB = async () => {
    try {
        const db = await DbConnect();
        const allBooks = db.collection('all-books');
        const result = await allBooks.find().toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};
export const GetCategoryBooksFromDB = async (category) => {
    try {
        const query = { category: category };
        const db = await DbConnect();
        const allBooks = db.collection('all-books');
        const result = await allBooks.find(query).toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};
export const GetAllVideosFromDB = async () => {
    try {
        const db = await DbConnect();
        const allVideos = db.collection('all-videos');
        const result = await allVideos.find().toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};
export const GetAllMoviesFromDB = async () => {
    try {
        const db = await DbConnect();
        const allMovies = db.collection('all-movies');
        const result = await allMovies.find().toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get movies data' });
    }
};
export const GetAllLifestyleFromDB = async () => {
    try {
        const db = await DbConnect();
        const allLifestyle = db.collection('all-lifestyle');
        const result = await allLifestyle.find().toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get Lifestyle data' });
    }
};
export const GetAllPhotosFromDB = async () => {
    try {
        const db = await DbConnect();
        const allPhotos = db.collection('all-photos');
        const result = await allPhotos.find().toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get Photos data' });
    }
};
export const GetAllMagazinesFromDB = async () => {
    try {
        const db = await DbConnect();
        const allMagazines = db.collection('all-magazines');
        const result = await allMagazines.find().toArray();
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get Magazines data' });
    }
};


// single data by id
export const GetSingleBookFromDB = async (id) => {

    try {
        if (!id) {
            return "wait";
        }
        const db = await DbConnect();
        const allBooks = db.collection('all-books');
        const query = { id: parseInt(id) }
        const result = await allBooks.findOne(query);
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};
export const GetSingleVideoFromDB = async (id) => {
    try {
        const db = await DbConnect();
        const allVideos = db.collection('all-videos');
        const query = { videoId: id }
        const result = await allVideos.findOne(query);
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};
export const GetSingleMovieFromDB = async (id) => {

    try {
        if (!id) {
            return "wait";
        }
        const db = await DbConnect();
        const allMovies = db.collection('all-movies');
        const query = { id: parseInt(id) }
        const result = await allMovies.findOne(query);
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};
export const GetSingleLifestyleFromDB = async (id) => {

    try {
        if (!id) {
            return "wait";
        }
        const db = await DbConnect();
        const allLifestyle = db.collection('all-lifestyle');
        const query = { id: parseInt(id) }
        const result = await allLifestyle.findOne(query);
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};
export const GetSinglePhotosFromDB = async (id) => {
    try {
        if (!id) {
            return "wait";
        }
        const db = await DbConnect();
        const allPhotos = db.collection('all-photos');
        const query = { id: parseInt(id) }
        const result = await allPhotos.findOne(query);
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};
export const GetSingleMagazineFromDB = async (id) => {
    try {
        if (!id) {
            return "wait";
        }
        const db = await DbConnect();
        const allMagazines = db.collection('all-magazines');
        const query = { id: parseInt(id) }
        const result = await allMagazines.findOne(query);
        return result;
    } catch (error) {
        console.error(error)
        return ({ error: 'error to get data' });
    }
};