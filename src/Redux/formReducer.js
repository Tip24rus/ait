const ADD_POST = "ADD_POST"
const NEW_NAME = "NEW_NAME"
const NEW_SURENAME = "NEW_SURENAME"
const NEW_AGE = "NEW_AGE"
const NEW_SEX = "NEW_SEX"
const NEW_NEIGHBOR_SEX = "NEW_NEIGHBOR_SEX"
const NEW_LOVE_TO_ANIMAL = "NEW_LOVE_TO_ANIMAL"
const NEW_SMOKING = "NEW_SMOKING"
const NEW_ABOUT = "NEW_ABOUT"
const NEW_HOUSE = "NEW_HOUSE"
const NEW_ANIMAL = "NEW_ANIMAL"
const NEW_AREA = "NEW_AREA"
export const AddPost = () => {
    return { type: "ADD_POST" };
};
export const NewName = ( message ) => {
    return { type: NEW_NAME, Name: message }
};
export const NewSureName = ( message ) => {
    return { type: NEW_SURENAME, SureName: message }
};
export const NewAge = ( message ) => {
    return { type: NEW_AGE, Age: message }
};
export const NewSex = ( message ) => {
    return { type: NEW_SEX, Sex: message }
};
export const NewNeighborSex = ( message ) => {
    return { type: NEW_NEIGHBOR_SEX, NeighbourSex: message }
};
export const NewLoveToAnimals = ( message ) => {
    return { type: NEW_LOVE_TO_ANIMAL, LoveToAnimals: message }
};
export const NewSmoking = ( message ) => {
    return { type: NEW_SMOKING, Smoking: message }
};
export const NewAbout = ( message ) => {
    return { type: NEW_ABOUT, About: message }
};
export const NewHouse = ( message ) => {
    return { type: NEW_HOUSE, House: message }
};
export const NewAnimal = ( message ) => {
    return { type: NEW_ANIMAL, Animal: message }
};
export const NewArea = ( message ) => {
    return { type: NEW_AREA, Area: message }
};
let initialState = {
    Area: 0,
    House: "Да",
    Animal: "Да",
    About: "",
    Name: "",
    SureName: "",
    Age: "18",
    Sex: 'Женский',
    NeighbourSex: 'Не важно',
    LoveToAnimals: 'Нейтральное',
    Smoking: 'Нейтральное',
    img: 'https://sun9-53.userapi.com/A2VdzUH49OPQr3bpf9laUIWIksM0LwjpRiAyig/DxRI-L99Qj4.jpg',
    posts: [
        {
            House: "Да",
            Animal: "Да",
            About: "Да здравствует первое мая!",
            Name: "Даздраперма",
            SureName: "Кукурузина",
            Age: "18",
            Sex: 'Женский',
            NeighbourSex: 'Не важно',
            LoveToAnimals: 'Нейтральное',
            Smoking: 'Нейтральное',
            Area: 'Ленинский',
            img: 'https://sun9-10.userapi.com/mGEuRD2JKY69ygTjT3y7gDskZHSUAWkRwxodcw/O5HRs6e07fc.jpg'
        }, {
            House: "Да",
            Animal: "Да",
            About: "БСП Звонить только понимающим!",
            Name: "Махрипа",
            SureName: "Хрипулаевна",
            Age: "33",
            Sex: 'Женский',
            NeighbourSex: 'Мужчину',
            LoveToAnimals: 'Нейтральное',
            Smoking: 'Отрицательное',
            Area: 'Центральный',
            img: 'https://sun9-48.userapi.com/GsWKWlW4qxO8uL0S7DjqaQG6kJkeEGU6ux-vzQ/lzG09caD_3M.jpg'
        }, {
            House: "Да",
            Animal: "Нет",
            About: "Дома тепло, сзади не дует",
            Name: "Скорость",
            SureName: "Черепаха",
            Age: "206",
            Sex: 'Женский',
            NeighbourSex: 'Не важно',
            LoveToAnimals: 'Нейтральное',
            Smoking: 'Отрицательное',
            Area: 'Советский',
            img: 'https://sun9-44.userapi.com/i-kK3jAXC-haHRVOKMSMSq8FnazIF1zu0M9Llw/WmSy75eIgJQ.jpg'
        }, {
            House: "Нет",
            Animal: "Да",
            About: "Пойдём в кино?))",
            Name: "Владимир",
            SureName: "Шилов",
            Age: "69",
            Sex: 'Мужской',
            NeighbourSex: 'Женщину',
            LoveToAnimals: 'Положительное',
            Smoking: 'Отрицательное',
            Area: 'Ленинский',
            img: 'https://sun9-9.userapi.com/c837327/v837327903/58591/idNv3khexUQ.jpg'
        }, {
            House: "Да",
            Animal: "Да",
            About: "Политик Лидер и Борец! Приходите на выборы 1 июля",
            Name: "Владимир Путин",
            SureName: "МОЛОДЕЦ!",
            Age: "81",
            Sex: 'Мужской',
            NeighbourSex: 'Не важно',
            LoveToAnimals: 'Нейтральное',
            Smoking: 'Отрицательное',
            Area: 'Центральный',
            img: 'https://cbsmedia.ru/wp-content/uploads/2018/10/putin1.jpg'
        }, {
            House: "Нет",
            Animal: "Нет",
            About: "Ищу Иришку Чики-Пики",
            Name: "Олег",
            SureName: "Монгол",
            Age: "18",
            Sex: 'Мужской',
            NeighbourSex: 'Женщину',
            LoveToAnimals: 'Нейтральное',
            Smoking: 'Нейтральное',
            Area: 'Ленинский',
            img: 'https://sun9-53.userapi.com/A2VdzUH49OPQr3bpf9laUIWIksM0LwjpRiAyig/DxRI-L99Qj4.jpg'
        }
    ],
    areas: [
        {
            Title: "---"
        }, {
            Title: "Ленинский"
        }, {
            Title: "Кировский"
        }, {
            Title: "Октябрьский"
        }, {
            Title: "Свердловский"
        }, {
            Title: "Центральный"
        }, {
            Title: "Железнодорожный"
        }, {
            Title: "Советский"
        }
    ]
}

export let formPage = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ADD_POST:
            let newPost = {
                Name: state.Name,
                SureName: state.SureName,
                Age: state.Age,
                Sex: state.Sex,
                NeighbourSex: state.NeighbourSex,
                House: state.House,
                Animal: state.Animal,
                About: state.About,
                LoveToAnimals: state.LoveToAnimals,
                Smoking: state.Smoking,
                Area: state.Area,
                img: state.img
            }
            return {
                ...state,
                posts: [
                    ...state.posts,
                    newPost
                ],
                House: "Нет",
                Animal: "Нет",
                About: "",
                Name: "",
                SureName: "",
                Age: "",
                Sex: 'Женский',
                NeighbourSex: 'Не важно',
                LoveToAnimals: 'Нейтральное',
                Smoking: 'Нейтральное'
            };
        case NEW_NAME:
            return {
                ...state,
                Name: action.Name
            };
        case NEW_SURENAME:
            return {
                ...state,
                SureName: action.SureName
            };
        case NEW_AGE:
            return {
                ...state,
                Age: action.Age
            };
        case NEW_SEX:
            return {
                ...state,
                Sex: action.Sex

            }
        case NEW_NEIGHBOR_SEX:
            return {
                ...state,
                NeighbourSex: action.NeighbourSex

            }
        case NEW_LOVE_TO_ANIMAL:
            return {
                ...state,
                LoveToAnimals: action.LoveToAnimals

            }
        case NEW_SMOKING:
            return {
                ...state,
                Smoking: action.Smoking
            }
        case NEW_ABOUT:
            return {
                ...state,
                About: action.About
            }
        case NEW_HOUSE:
            return {
                ...state,
                House: action.House
            }
        case NEW_AREA:
            return {
                ...state,
                Area: action.Area
            }
        default:
            return state;

    }
}
