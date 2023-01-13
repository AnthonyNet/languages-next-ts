
// This function is used to get the data from the local storage


/*
export function getLocalStorage(){
    let totalScore = localStorage.getItem('totalScore');
    if(totalScore){
        return JSON.parse(localStorage.getItem('totalScore') || "")
    }else{
        return[]
    }
}*/


export const getLocalStorage = ('totalStorage'):any => {
    const data = localStorage.getItem('totalStorage');
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
}




