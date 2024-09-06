"use sctick";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', '').trim(), // метод для отмены пробелов в строке, то есть строка с просто пробелами - будет пустой
			  b = prompt('На сколько оцените его?', '');
		
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
		console.log('Классный зритель');	
	} else if (personalMovieDB.count >= 30) {
		console.log('Много смотришь')
	} else {
		console.log('Произошла ошибка');
	}
}

detectPersonalLevel();

function showMyDB(hidden) {
	if(!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++ ) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр по под номером ${i}`);
	}
}

writeYourGenres();