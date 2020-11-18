const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: null,
			people: null,
			vehicles: null,
			starships: null,
			favorites: []
		},

		actions: {
			getPeople(url) {
				fetch(url)
					.then(res => res.json())
					.then(data => {
						setStore({
							people: data
						});
					})
					.catch(error => {
						console.log(error);
					});
			},

			getPlanets(url) {
				fetch(url)
					.then(res => res.json())
					.then(data => {
						setStore({
							planets: data
						});
					})
					.catch(error => {
						console.log(error);
					});
			},

			getVehicles(url) {
				fetch(url)
					.then(res => res.json())
					.then(data => {
						setStore({
							vehicles: data
						});
					})
					.catch(error => {
						console.log(error);
					});
			},

			getStarships(url) {
				fetch(url)
					.then(res => res.json())
					.then(data => {
						setStore({
							starships: data
						});
					})
					.catch(error => {
						console.log(error);
					});
			},

			getFavorites: name => {
				const store = getStore();
				let findFavorite = store.favorites.some(favoriteName => favoriteName === name);
				if (findFavorite === false) {
					setStore(store.favorites.push(name));
				} else {
					let indexFavorite = store.favorites.indexOf(name);
					setStore({ ...store }, store.favorites.splice(indexFavorite, 1));
				}
			}
		}
	};
};

export default getState;
