import HomeDetailView from "./main/HomeDetailView";
import HomeView from "./main/HomeView";
import View01 from "./main/View01";
import View02 from "./main/View02";
import View03 from "./main/View03";
import View05 from "./main/View05";
import View04 from "./publics/View04";


// const viewsName = {
//     HomeView: {
//         component: HomeView,
//         options: {
//             title: "Home",
//         }
//     },
//     HomeDetailView: {
//         // name: "Details",
//         component: HomeDetailView,
//         options: {
//             title: "Detail",
//         }
//     }
// }


const viewsName = {
    View01: {
        component: View01,
        options: {
            title: "View01",
        }
    },
    View02: {
        // name: "Details",
        component: View02,
        options: {
            title: "View02",
        }
    },
    View03: {
        // name: "Details",
        component: View03,
        options: {
            title: "View03",
        }
    },
    View04: {
        // name: "Details",
        component: View04,
        options: {
            title: "View04",
        }
    },
    View05: {
        // name: "Details",
        component: View05,
        options: {
            title: "View05",
        }
    }
}

export type TViewNames = keyof typeof viewsName;



export {
    viewsName
}