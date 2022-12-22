import cashbook from '../images/project/cashbook.png'
import islamBlog from '../images/project/islam_Blog.png'
import quranStation from '../images/project/quran_station.png'
import reduxcart from '../images/project/redux-cart.png'
import tftf from '../images/project/tftf.png'
import todo from '../images/project/todo.png'

const projects = [
    {
        name : 'Quran Station',
        details:'A islamic learning platform',
        image : quranStation,
        live_link : "https://quranstation.netlify.app/",
        github_link : "https://github.com/DevWithEasy/quran-station",
        features : [
            'Listening and Reading Holy Quran.',
            'Listening Holy Quran About 360 Reciters.',
            'Learn Quran with video course.',
            'Read islamic Blog.',
            'Learn  and Read many articles of islam and differnts topics.'
        ],
        elements:{
                language :'Javascript',
                library : 'React Js',
                style : 'Tailwind CSS',
                backend_database : 'Collecion some API',
                authentication : 'None',
                hosting : 'Netlify',
            },
        tools : ["ReactJs", "Tailwind CSS"]
    },
    {
        name : 'Cashbook',
        details:'Acoounting management application',
        image : cashbook,
        live_link : "http://cashbook-devwitheasy.vercel.app/",
        github_link : "https://github.com/DevWithEasy/cashbook",
        features : [
            'Create personal acoount.',
            'Save Data in Database in own acoount',
            'Authenticated Login system.',
            'Create multiple Books in account.',
            'Create Different Entry in differnts Books',
            'Crud Opertion in Book and Entry',
            'Updated Entry with Edit History auto save.',
            'User verification by email and verify code.',
            'Forget and verify password with email verification.',
            'User profile image upload and delete.',
            'Acccount Deletetion with all Data.'
        ],
        elements:{
                language :'Javascript',
                library : 'React Js / Next Js (Fullstack)',
                style : 'Tailwind CSS with Post CSS',
                backend_database : 'MongoDB / Cloudinary',
                authentication : 'JWT,Bcrypt and Firebase',
                hosting : 'Vercel',
            },
        tools : ["Next-Js", "Tailwind CSS","MongoDB", "Firebase"]
    },
    {
        name : 'IslamBD',
        details:'A Blog site with QNA and Quiz application system',
        image : islamBlog,
        live_link : "https://islambd-devwitheasy.vercel.app/",
        github_link : "https://github.com/DevWithEasy/blog-qna-quiz-app",
        features : [
            'Create personal acoount.',
            'Save Data in Database in own acoount',
            'Authenticated Login system.',
            'Multi user Bloging system.',
            'Blog ,QNA and Quiz system differnts page with diffent category',
            'Blog post with Rich Editor and image upload',
            'Crud Opertion in Blog and QNA',
            'Admin Auther User system.',
            'Point system. Point added user acoount user activity and cash widdraw.',
            'Admin Only can Quiz question and answer',
            'Like comment and Reply system',
            'User verification by email and verify code.',
            'Forget and verify password with email verification.',
            'User profile image upload and delete.',
            'Acccount Deletetion with all Data.'
        ],
        elements:{
            language :'Javascript',
            library : 'React Js / Next Js (Fullstack)',
            style : 'Tailwind CSS with Post CSS',
            backend_database : 'Firebase Firestore / Storage',
            authentication : 'JWT,Bcrypt and Firebase',
            hosting : 'Vercel',
        },
    tools : ["Next-Js", "Tailwind CSS","Firebase"]
    },
    {
        name : 'TODO application',
        details:'Organize yourwork and life, finally.',
        image : todo,
        live_link : "https://todo-bangla.netlify.app/",
        github_link : "https://github.com/DevWithEasy/todo-app-client",
        features : [

        ],
        elements:
            {
                language :'',
                library : '',
                style : '',
                backend_database : '',
                authentication : '',
                hosting : '',
            },
        tools : ["ReactJs", "Tailwind CSS" ,"Node JS","Express JS","MongoDB"]
    },
    {
        name : 'TFT Foundation',
        details:'Food Technology Foundation Orannigation Website',
        image : tftf,
        live_link : "https://tftf.netlify.app/",
        github_link : "https://github.com/DevWithEasy/tft-foundation",
        features : [

        ],
        elements:{
                language :'',
                library : '',
                style : '',
                backend_database : '',
                authentication : '',
                hosting : '',
            },
        tools : ["ReactJs", "Tailwind CSS" ,"Firebase",]
    },
    {
        name : 'Cart Add Product',
        details:'Product Add in cartlist practice project',
        image : reduxcart,
        live_link : "https://react-redux-cart-bangla.netlify.app/",
        github_link : "https://github.com/DevWithEasy/react-redux-cart",
        features : [

        ],
        elements:{
                language :'',
                library : '',
                style : '',
                backend_database : '',
                authentication : '',
                hosting : '',
            },
        tools : ["React Js", "Tailwind CSS"]
    }
]

export default projects;