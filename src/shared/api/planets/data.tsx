import { IplanetInfo } from '@/store/planets/planets.types'

export function GetPlanetsInfo(): IplanetInfo[] {
	const planetsInfo: IplanetInfo[] = [
		{
			name: 'Sun',
			className: 'w-[500px] h-[500px] ml-6',
			pictureSize: 'w-[450px] h-[400px] animate-spin-slow',
			x_position: '-80vw',
			scale: 1,
			tagline: 'Жовтий карлик',
			tagline_icon: 'https://img.icons8.com/ios/50/ffffff/earth-planet.png',
			picture:
				'https://i.ibb.co/Wkfp5k1/1solar-flare-en-removebg-preview-1.png',
			textureUrl:
				'https://www.solarsystemscope.com/textures/download/2k_mercury.jpg',
			description: 'Сонце',
			distanceFromSun: '0 million miles',
			yearLength: '88',
			numberOfMoons: 0,
			namesake: 'SUN',
			rings: {
				url_exists: false
			},
			spaceTexture_url:
				'https://www.solarsystemscope.com/textures/download/2k_stars.jpg'
		},
		{
			name: 'Mercury',
			className: 'w-[25px] h-[25px]',
			pictureSize: 'w-[400px] h-[350px] animate-spin-slow',
			x_position: '-43vw',
			scale: 1.1,
			tagline: 'Планета земної групи',
			tagline_icon: 'https://img.icons8.com/ios/50/ffffff/earth-planet.png',
			picture:
				'https://i.ibb.co/G7BtSYM/Mercury-in-true-color-removebg-preview.png',
			textureUrl:
				'https://www.solarsystemscope.com/textures/download/2k_mercury.jpg',
			description:
				"Меркурій є найменшою планетою в нашій Сонячній системі та найближчою до Сонця, Меркурій лише трохи більший за Місяць Землі. Це найближча до Сонця планета. Меркурій — кам'яниста планета, також відома як планета земної групи. Меркурій має тверду, вкриту кратерами поверхню, схожу на Місяць Землі.",
			distanceFromSun: '36 million miles',
			yearLength: '88',
			numberOfMoons: 0,
			namesake: 'ROMAN GOD OF SPEED',
			rings: {
				url_exists: false
			},
			spaceTexture_url:
				'https://www.solarsystemscope.com/textures/download/2k_stars.jpg'
		},
		{
			name: 'Venus',
			className: 'w-[60px] h-[60px]',
			pictureSize: 'w-[400px] h-[380px] animate-spin-slow',
			x_position: '-36vw',
			scale: 1.1,
			tagline: 'Планета земної групи',
			tagline_icon: 'https://img.icons8.com/ios/50/ffffff/earth-planet.png',
			picture:
				'https://i.ibb.co/8cN61tp/Venus-from-Mariner-10-removebg-preview.png',
			textureUrl:
				'https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg',
			description:
				'Венера є другою планетою від Сонця і є найближчим планетарним сусідом Землі. Це одна з чотирьох внутрішніх планет земної групи (або скелястих), і її часто називають двійником Землі, оскільки вона схожа за розміром і щільністю. Венера обертається навколо своєї осі назад, порівняно з більшістю інших планет Сонячної системи. Венера була першою планетою, дослідженою космічним кораблем. Венера має тверду поверхню, вкриту куполоподібними вулканами, рифтами та горами, з великими вулканічними рівнинами та великими хребтовими плато.',
			distanceFromSun: '67 million miles',
			yearLength: '225',
			numberOfMoons: 0,
			namesake: 'ROMAN GODDESS OF LOVE',
			rings: {
				url_exists: false
			},
			spaceTexture_url:
				'https://www.solarsystemscope.com/textures/download/2k_stars.jpg'
		},
		{
			name: 'Earth',
			className: 'w-[60px] h-[60px]',
			pictureSize: 'w-[400px] h-[400px] animate-spin-slow',
			x_position: '-29vw',
			scale: 1.1,
			tagline: 'Планета земної групи',
			tagline_icon: 'https://img.icons8.com/ios/50/ffffff/earth-planet.png',
			picture:
				'https://i.ibb.co/8c2Cv9z/1200px-The-Earth-seen-from-Apollo-17-removebg-preview.png',
			textureUrl:
				'https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg',
			description:
				'Наша рідна планета Земля — скеляста планета земної групи. Він має тверду та активну поверхню з горами, долинами, каньйонами, рівнинами та багато іншого. Земля особлива тим, що це планета-океан. Вода покриває 70 відсотків поверхні Землі. Атмосфера Землі складається здебільшого з азоту та містить багато кисню, яким ми можемо дихати. Атмосфера також захищає нас від налітаючих метеорних тіл, більшість з яких розпадаються ще до того, як впадуть на поверхню.',
			distanceFromSun: '93 million miles',
			yearLength: '365',
			numberOfMoons: 1,
			namesake: "VARIATION OF 'THE GROUNDED' IN MANY LANGUAGES",
			rings: {
				url_exists: false
			},
			spaceTexture_url:
				'https://www.solarsystemscope.com/textures/download/2k_stars.jpg'
		},
		{
			name: 'Mars',
			className: 'w-[45px] h-[45px]',
			pictureSize: 'w-[400px] h-[400px] animate-spin-slow',
			x_position: '-21vw',
			scale: 1.1,
			tagline: 'Планета земної групи',
			tagline_icon: 'https://img.icons8.com/ios/50/ffffff/earth-planet.png',
			picture:
				'https://i.ibb.co/K2CftyS/OSIRIS-Mars-true-color-removebg-preview.png',
			textureUrl:
				'https://www.solarsystemscope.com/textures/download/2k_mars.jpg',
			description:
				'Марс - холодний пустельний світ. Це вдвічі менше Землі. Марс іноді називають Червоною планетою. Воно червоне через іржаве залізо в землі. Як і Земля, Марс має пори року, полярні шапки, вулкани, каньйони та погоду. Він має дуже тонку атмосферу, що складається з вуглекислого газу, азоту та аргону. На Марсі є ознаки давніх повеней, але зараз вода здебільшого існує в крижаному бруді та тонких хмарах. На деяких марсіанських пагорбах є докази рідкої солоної води в землі.',
			distanceFromSun: '142 million miles',
			yearLength: '687',
			numberOfMoons: 2,
			namesake: 'ROMAN GOD OF WAR',
			rings: {
				url_exists: false
			},
			spaceTexture_url:
				'https://www.solarsystemscope.com/textures/download/2k_stars.jpg'
		},
		{
			name: 'Jupiter',
			className: 'w-[250px] h-[250px]',
			pictureSize: 'w-[400px] h-[420px] animate-spin-slow',
			x_position: '-15vw',
			scale: 1.05,
			tagline: 'Газовий гігант',
			tagline_icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/planet.png',
			picture:
				'https://i.ibb.co/2YDqP3P/Jupiter-and-its-shrunken-Great-Red-Spot-removebg-preview.png',
			textureUrl:
				'https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg',
			description:
				'Юпітер — найбільша планета нашої Сонячної системи. Він схожий на зірку, але ніколи не ставав настільки великим, щоб почати горіти. Юпітер покритий закрученими смугами хмар. Тут відбуваються великі шторми, такі як Велика червона пляма, які тривають сотні років. Юпітер є газовим гігантом і не має твердої поверхні, але може мати тверде внутрішнє ядро ​​розміром із Землю. У Юпітера також є кільця, але вони надто тьмяні, щоб їх було добре видно.',
			distanceFromSun: '484 million miles',
			yearLength: '4,333',
			numberOfMoons: 75,
			namesake: 'KING OF THE ROMAN GODS',
			rings: {
				url_exists: false
			},
			spaceTexture_url:
				'https://www.solarsystemscope.com/textures/download/2k_stars.jpg'
		},
		{
			name: 'Saturn',
			className: 'w-[420px] h-[280px]',
			pictureSize: 'w-[500px] h-[360px] animate-spin-slow mb-12',
			x_position: '2vw',
			scale: 1.05,
			tagline: 'Крижаний гігант',
			tagline_icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/planet.png',
			picture:
				'https://i.ibb.co/1MHPjZT/38-saturn-1600x900-removebg-preview.png',
			textureUrl:
				'https://www.solarsystemscope.com/textures/download/2k_saturn.jpg',
			description:
				'Сатурн є шостою планетою від Сонця і другою за величиною планетою нашої Сонячної системи. Сатурн є газовим гігантом і тому не має твердої поверхні, як у Землі. Сатурн має найбільш вражаючу систему кілець із сімома кільцями та декількома проміжками та розділами між ними. Як і Юпітер, Сатурн здебільшого куля з водню та гелію.',
			distanceFromSun: '886 million miles',
			yearLength: '10,759',
			numberOfMoons: 82,
			namesake: 'FATHER OF JUPITER',
			rings: {
				url_exists: true
			},
			spaceTexture_url:
				'https://www.solarsystemscope.com/textures/download/2k_stars.jpg'
		},
		{
			name: 'Uranus',
			className: 'w-[100px] h-[100px]',
			pictureSize: 'w-[400px] h-[400px] animate-spin-slow',
			x_position: '32vw',
			scale: 1.1,
			tagline: 'Крижаний гігант',
			tagline_icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/snowflake.png',
			picture: 'https://i.ibb.co/6Yy98fv/uranus-v2-removebg-preview.png',
			textureUrl:
				'https://www.solarsystemscope.com/textures/download/2k_uranus.jpg',
			description:
				'Уран складається з води, метану та аміаку над невеликим скелястим центром. Його атмосфера складається з водню та гелію, як Юпітер і Сатурн, але в ній також є метан. Метан робить Уран синім. Уран також має слабкі кільця. Внутрішні кільця вузькі, темні. Зовнішні кільця яскраво забарвлені, і їх легше побачити. Як і Венера, Уран обертається в протилежному напрямку, як і більшість інших планет. І на відміну від інших планет, Уран обертається на боці.',
			distanceFromSun: '1.8 billion miles',
			yearLength: '30,687',
			numberOfMoons: 27,
			namesake: 'GREEK GOD OF THE SKY',
			rings: {
				url_exists: false
			},
			spaceTexture_url:
				'https://www.solarsystemscope.com/textures/download/2k_stars.jpg'
		},
		{
			name: 'Neptune',
			className: 'w-[100px] h-[100px]',
			pictureSize: 'w-[400px] h-[400px] animate-spin-slow',
			x_position: '41vw',
			scale: 1.1,
			tagline: 'Крижаний гігант',
			tagline_icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/snowflake.png',
			picture:
				'https://i.ibb.co/7r7PbBQ/e-NTJrysq4-A6-Dq-Xnc-Bts-Rr-B-removebg-preview.png',
			textureUrl:
				'https://www.solarsystemscope.com/textures/download/2k_neptune.jpg',
			description:
				'Нептун темний, холодний і дуже вітряний. Це остання з планет нашої Сонячної системи. Це більш ніж у 30 разів далі від Сонця, ніж Земля. Нептун дуже схожий на Уран. Він складається з густого супу з води, аміаку та метану над твердим центром розміром із Землю. Його атмосфера складається з водню, гелію і метану. Метан надає Нептуну такий же синій колір, як і Уран. У Нептуна шість кілець, але їх дуже важко побачити.',
			distanceFromSun: '2.8 billion miles',
			yearLength: '60,190',
			numberOfMoons: 14,
			namesake: 'ROMAN GOD OF THE SEA',
			rings: {
				url_exists: false
			},
			spaceTexture_url:
				'https://www.solarsystemscope.com/textures/download/2k_stars.jpg'
		}
	]

	return planetsInfo
}
