(() => {
	
	/** 定数定義 */
	const wagonAULT_ROW_SIZE = 50;    // デフォルトのフィールドのヨコの広さ
	const wagonAULT_COLUMN_SIZE = 20; // デフォルトのフィールドのタテの広さ
	const wagonAULT_LANG_KEY = 'ja';  // デフォルトの言語キー
	const ENGINE_COUNT = 7;
	const WAGON_DEFINE = [
		['CraftingWagon', 3],
		['StorageWagon', 3],
		['TankWagon', 3],
		['DynamiteWagon', 3],
		['SuperchargerWagon', 3],
		['CollectorWagon', 3],
		['BrakeWagon', 3],
		['GhostWagon', 3],
		['BuckinatorWagon', 3],
		['MinerWagon', 3],
		['TransformerWagon', 3],
		['SlotMachineWagon', 3],
		['LightWagon', 2],
		['CompassWagon', 2],
		['CannonWagon', 1],
	];
	const LANG = {
		'title': {
			ja: 'Unrailed! Train Maker',
			en: 'Unrailed! Train Maker',
		},
		'train': {
			ja: '列車',
			en: 'Train',
		},
		'engine': {
			ja: 'エンジン',
			en: 'Engines',
		},
		'wagon': {
			ja: 'ワゴン',
			en: 'Wagons',
		},
		'how-to-use': {
			ja: '使い方',
			en: 'How to Use',
		},
		'how-to-use-1': {
			ja: 'ワゴンを他のワゴンにドラッグ＆ドロップすると、ワゴンを移動させることができます。',
			en: 'Drag and drop wagons to move train wagons.',
		},
		'how-to-use-2': {
			ja: 'ワゴンを列車の外にドラッグ＆ドロップすると、ワゴンを削除することができます。',
			en: 'Drag and drop a wagon outside the train to delete it.',
		},
		'how-to-use-3': {
			ja: 'ワゴンの上でマウスホイールを上下すると、ワゴンのレベルを変更できます。',
			en: 'Move the wheel up and down on a wagon to change its level.',
		},
		'how-to-use-4': {
			ja: 'メニューのエンジンをクリックすると、列車のエンジンを変更することができます。',
			en: 'Click on an engine in the menu to change to that engine.',
		},
		'how-to-use-5': {
			ja: 'メニューのワゴンをクリックすると、列車にワゴンを追加することができます。',
			en: 'Click on a wagon in the menu to add that wagon.',
		},
		'how-to-use-touch-1': {
			ja: 'ワゴンをタップして選択してから挿入したい場所をタップすると、ワゴンを移動させることができます。',
			en: 'Tap a wagon to select it, and then tap the location where you want to insert it to move it.',
		},
		'how-to-use-touch-2': {
			ja: 'ワゴンを上か下にフリックすると、ワゴンを削除できます。',
			en: 'Flick the wagon up or down to delete it.',
		},
		'how-to-use-touch-3': {
			ja: 'メニューのエンジンをタップすると、列車のエンジンを変更することができます。',
			en: 'Tap on an engine in the menu to change to that engine.',
		},
		'how-to-use-touch-4': {
			ja: 'メニューのワゴンをタップすると、列車にワゴンを追加することができます。',
			en: 'Tap on a wagon in the menu to add that wagon.',
		},
		'about': {
			ja: 'このツールについて',
			en: 'About',
		},
		'about-content': {
			ja: '<a href="https://gungeespla.github.io/Unrailed-Train-Maker/">Unrailed! Train Maker</a>は、ゲーム『<a href="https://unrailed-game.com/">Unrailed!</a>』の列車の画像を作れる非公式のツールです。ツール作成にあたって<a href="https://unrailed-wiki.com/page/Unrailed!_Wiki">Unrailed! Wiki</a>様の画像を使用しました。',
			en: '<a href="https://gungeespla.github.io/Unrailed-Train-Maker/">Unrailed! Train Maker</a> is the unofficial online software for creating images of <a href="https://unrailed-game.com/">Unrailed!</a> trains. This site uses images from the <a href="https://unrailed-wiki.com/page/Unrailed!_Wiki">Unrailed! Wiki</a>.',
		},
		'download-png': {
			ja: 'Download PNG',
			en: 'Download PNG',
		},
		'download-jpg': {
			ja: 'Download JPG',
			en: 'Download JPG',
		},
		'error-download': {
			ja: '画像のダウンロードに失敗しました！',
			en: 'Download Error!',
		},
		'error-too-many-wagon': {
			ja: 'ワゴンが多すぎるよ！',
			en: 'There are too many wagons.',
		},
		'error-no-required-wagon': {
			ja: 'クラフトワゴン、貨物ワゴン、またはタンクワゴンがないよ！',
			en: 'Add crafting wagons, storage wagons, or tank wagons.',
		},
		'BrakeWagon': {
			ja: 'ブレーキワゴン',
			en: 'Brake Wagon',
		},
		'BuckinatorWagon': {
			ja: 'バッキネーター',
			en: 'Buckinator Wagon',
		},
		'CannonWagon': {
			ja: '大砲ワゴン',
			en: 'Cannon Wagon',
		},
		'CollectorWagon': {
			ja: 'バキュームワゴン',
			en: 'Collector Wagon',
		},
		'CompassWagon': {
			ja: 'コンパスワゴン',
			en: 'Collector Wagon',
		},
		'CraftingWagon': {
			ja: 'クラフトワゴン',
			en: 'Crafting Wagon',
		},
		'DynamiteWagon': {
			ja: 'ダイナマイトワゴン',
			en: 'Dynamite Wagon',
		},
		'GhostWagon': {
			ja: 'ゴーストワゴン',
			en: 'Ghost Wagon',
		},
		'LightWagon': {
			ja: '照明ワゴン',
			en: 'Light Wagon',
		},
		'MinerWagon': {
			ja: '採掘ワゴン',
			en: 'Miner Wagon',
		},
		'SlotMachineWagon': {
			ja: 'スロットワゴン',
			en: 'SlotMachine Wagon',
		},
		'StorageWagon': {
			ja: '貨物ワゴン',
			en: 'Storage Wagon',
		},
		'SuperchargerWagon': {
			ja: 'スーパーチャージワゴン',
			en: 'Supercharger Wagon',
		},
		'TankWagon': {
			ja: 'タンクワゴン',
			en: 'Tank Wagon',
		},
		'TransformerWagon': {
			ja: '変換ワゴン',
			en: 'Transformer Wagon',
		},
		'setting': {
			ja: '設定',
			en: 'Settings',
		},
		'setting-is-level-visible': {
			ja: 'ワゴンのレベルを表示する。',
			en: 'Display the level of the wagon.',
		},
		'setting-is-charger-enabled': {
			ja: 'スーパーチャージワゴンの効果を反映する。',
			en: 'Reflects the effects of the Supercharger Wagon.',
		},
		'setting-is-ghost-enabled': {
			ja: 'ゴーストワゴンの効果が及んでいるワゴンを半透明にする。',
			en: 'Makes the wagon affected by the ghost wagon translucent.',
		},
		'setting-is-only-max-wagon-visible': {
			ja: '最高レベルのワゴンだけを表示する。',
			en: 'Show only the highest level wagons.',
		},
	};
	const IS_TOUCH_DEVICE  = ('ontouchstart' in window || navigator.msPointerEnabled) ? true : false;
	const EVENT_CLICK      = IS_TOUCH_DEVICE ? 'touchstart' : 'click';
	const QUERIES = get_queries();
	const QUERY_LANG_KEY = QUERIES.lang;
	const NAVIGATOR_LANG_KEY = navigator.language || navigator.userLanguage || 'ja';
	const LANG_KEY =
		  QUERIES.lang === 'en' ? 'en' :
		  QUERIES.lang === 'ja' ? 'ja' :
		  NAVIGATOR_LANG_KEY.includes('ja') ? 'ja' :
		  'en';
	let savedata = {
		'settings': {
			'is_level_visible': false,
			'is_ghost_enabled': false,
			'is_charger_enabled': false,
			'is_only_max_wagon_visible': false,
			'level_visible_settings': {
				'TankWagon': false,
				'StorageWagon': false,
				'CraftingWagon': false,
				'DynamiteWagon': false,
				'SuperchargerWagon': false,
				'LightWagon': false,
				'CollectorWagon': false,
				'BrakeWagon': false,
				'BuckinatorWagon': false,
				'GhostWagon': true,
				'MinerWagon': false,
				'TransformerWagon': false,
				'CompassWagon': false,
				'SlotMachineWagon': false,
				'CannonWagon': false,
			},
		},
	};
	let mouse_state = {
		is_down: false,
		select_wagon_index: 0,
		select_wagon_elm: null,
	};

	/** init_storage()
	 */
	function init_storage() {
		localStorage.removeItem('Unrailed-Train-Maker');
	}

	/** save_storage()
	 */
	function save_storage() {
		const json_str = JSON.stringify(savedata);
		localStorage.setItem('Unrailed-Train-Maker', json_str);
	}

	/** load_storage()
	 */
	function load_storage() {
		const json_str = localStorage.getItem('Unrailed-Train-Maker');
		if (json_str) {
			const json = JSON.parse(json_str);
			savedata = json;
		}
		Object.keys(savedata['settings']).forEach((key) => {
			if (key.includes('is_')) {
				const input = document.getElementById(key);
				input.checked = savedata['settings'][key];
				trigger(input, 'change');
			}
		});
		Object.keys(savedata['settings']['level_visible_settings']).forEach((key) => {
			const input = document.getElementById('level_visible_settings_' + key);
			input.checked = savedata['settings']['level_visible_settings'][key];
		});
		/*
		let savedata = {
			'settings': {
				'is_level_visible': true,
				'is_ghost_enabled': true,
				'is_charger_enabled': true,
				'is_not_max_wagon_visible': true,
				'level_visible_settings': {
					'BrakeWagon', false,
					'BuckinatorWagon', false,
					'CannonWagon', false,
					'CollectorWagon', false,
					'CompassWagon', false,
					'CraftingWagon', false,
					'DynamiteWagon', false,
					'GhostWagon', false,
					'LightWagon', false,
					'MinerWagon', false,
					'SlotMachineWagon', false,
					'StorageWagon', false,
					'SuperchargerWagon', false,
					'TankWagon', false,
					'TransformerWagon', false,
				},
			},
		};
		*/
	}

	/** level_up(wagon)
	 */
	function level_up(wagon) {
		const name = wagon.getAttribute('wagon-name');
		if (name !== 'SuperchargerWagon') {
			wagon.classList.add('charging');
			const charged_level = parseInt(wagon.getAttribute('wagon-charged-level')) + 1;
			wagon.setAttribute('wagon-charged-level', charged_level)
			wagon.querySelector('.charged-level').textContent = charged_level;
		}
	}

	/** update_train()
	 */
	function update_train() {
		const wagons = document.querySelectorAll('.train-container .wagon-container');
		let crafting_exists = false;
		let storage_exists = false;
		let tank_exists = false;
		wagons.forEach((wagon) => {
			const name = wagon.getAttribute('wagon-name');
			if (name === 'CraftingWagon') {
				crafting_exists = true;
			}
			if (name === 'StorageWagon') {
				storage_exists = true;
			}
			if (name === 'TankWagon') {
				tank_exists = true;
			}
			wagon.classList.remove('charging');
			wagon.classList.remove('ghosting');
			const origin_level = wagon.getAttribute('wagon-level');
			wagon.setAttribute('wagon-charged-level', origin_level);
			wagon.querySelector('.charged-level').textContent = origin_level;
			wagon.querySelector('img').setAttribute('title', `${get_lang(name)} Lv${origin_level}`);
		});
		const wagon_count_max = parseInt(document.querySelector('.train-container .engine-container').getAttribute('wagon-count-max'));
		const required_wagons_exist = crafting_exists && storage_exists && tank_exists;
		const errors = document.querySelector('.errors');
		if (wagons.length > wagon_count_max) {
			errors.style.setProperty('display', 'block');
			errors.textContent = get_lang('error-too-many-wagon');
		} else if (!required_wagons_exist) {
			errors.style.setProperty('display', 'block');
			errors.textContent = get_lang('error-no-required-wagon');
		} else {
			errors.style.setProperty('display', 'none');
		}
		wagons.forEach((wagon) => {
			const name = wagon.getAttribute('wagon-name');
			const level = parseInt(wagon.getAttribute('wagon-level'));
			if (name === 'SuperchargerWagon') {
				let prev = wagon;
				let next = wagon;
				for (let i = 0; i < level; i++) {
					if (prev) {
						prev = prev.previousElementSibling;
						if (prev && prev.classList.contains('wagon-container')) {
							level_up(prev);
						}
					}
					if (next) {
						next = next.nextElementSibling;
						if (next && next.classList.contains('wagon-container')) {
							level_up(next);
						}
					}
				}
			}
		});
		wagons.forEach((wagon) => {
			const name = wagon.getAttribute('wagon-name');
			const level = parseInt(wagon.getAttribute('wagon-charged-level'));
			if (name === 'GhostWagon') {
				wagon.classList.add('ghosting');
				let prev = wagon;
				let next = wagon;
				for (let i = 0; i < level - 1; i++) {
					if (prev) {
						prev = prev.previousElementSibling;
						if (prev && prev.classList.contains('wagon-container')) {
							prev.classList.add('ghosting');
						}
					}
					if (next) {
						next = next.nextElementSibling;
						if (next && next.classList.contains('wagon-container')) {
							next.classList.add('ghosting');
						}
					}
				}
			}
		});
	}

	/** add_wagon(name, level)
	 */
	function add_wagon(name, level, level_max) {
		const wagons = document.querySelectorAll('.train-container .wagon-container');
		const container = document.createElement('div');
		container.classList.add('wagon-container');
		container.setAttribute('wagon-name', name);
		container.setAttribute('wagon-level', level);
		container.setAttribute('wagon-level-max', level_max);
		container.setAttribute('wagon-charged-level', level);
		container.setAttribute('wagon-index', wagons.length);
		const p = document.createElement('p');
		p.textContent = level;
		p.classList.add('level');
		container.append(p);
		const p2 = document.createElement('p');
		p2.textContent = level;
		p2.classList.add('charged-level');
		container.append(p2);
		// 画像
		const img = document.createElement('img');
		const src = `./assets/img/wagon/${name}_${level}.png`;
		img.setAttribute('origin-src', src);
		img.setAttribute('draggable', 'false');
		img.setAttribute('src', src);
		img.setAttribute('title', `${get_lang(name)} Lv${level}`);
		img.classList.add(name);
		container.append(img);
		set_wagon_event(container, true);
		document.querySelector('.train-container').prepend(container);
	}

	/** set_wagon_event(wagon, is_wagon)
	 */
	function set_wagon_event(wagon, is_wagon) {
		const img = wagon.querySelector('img');
		if (IS_TOUCH_DEVICE) {
			if (is_wagon) {
				let delete_timer;
				wagon.addEventListener('touchstart', (e) => {
					if (mouse_state.is_down) {
						const train = document.querySelector('.train-container');
						train.querySelectorAll('.wagon-container,.engine-container').forEach((elm) => {
							elm.classList.remove('insert');
							elm.classList.remove('dragging');
						});
						train.insertBefore(mouse_state.select_wagon_elm, wagon);
						mouse_state.is_down = false;
						update_train();
					} else {
						const index = parseInt(wagon.getAttribute('wagon-index'));
						mouse_state.is_down = true;
						mouse_state.select_wagon_index = index;
						mouse_state.select_wagon_elm = wagon;
						mouse_state.select_wagon_img = img;
						wagon.classList.add('dragging');
						const touch = e.changedTouches[0];
						mouse_state.start_y = touch.pageY;
					}
					e.stopPropagation();
				});
				wagon.addEventListener('touchend', (e) => {
					clearInterval(delete_timer);
				});
				wagon.addEventListener('touchmove', (e) => {
					const touch = e.changedTouches[0];
					const move_y = Math.abs(mouse_state.start_y - touch.pageY);
					if (move_y > wagon.clientHeight) {
						wagon.remove();
						mouse_state.is_down = false;
						update_train();
					}
					e.preventDefault();
				}, { passive: false });
			} else {
				wagon.addEventListener('touchstart', (e) => {
					if (mouse_state.is_down) {
						const train = document.querySelector('.train-container');
						train.querySelectorAll('.wagon-container,.engine-container').forEach((elm) => {
							elm.classList.remove('insert');
							elm.classList.remove('dragging');
						});
						train.insertBefore(mouse_state.select_wagon_elm, wagon);
						mouse_state.is_down = false;
						update_train();
					}
					e.stopPropagation();
				});
			}
		} else {
			if (is_wagon) {
				wagon.addEventListener('mousedown', (e) => {
					const index = parseInt(wagon.getAttribute('wagon-index'));
					mouse_state.is_down = true;
					mouse_state.select_wagon_index = index;
					mouse_state.select_wagon_elm = wagon;
					mouse_state.select_wagon_img = img;
					wagon.classList.add('dragging');
				});
				wagon.addEventListener('mousewheel', (e) => {
					e.preventDefault();
					const name = wagon.getAttribute('wagon-name');
					const level = parseInt(wagon.getAttribute('wagon-level'));
					const level_max = parseInt(wagon.getAttribute('wagon-level-max'));
					let new_level = null;
					if (e.wheelDelta > 0) {
						if (level < level_max) {
							new_level = level + 1;
						}
					} else {
						if (level > 1) {
							new_level = level - 1;
						}
					}
					if (new_level) {
						wagon.setAttribute('wagon-level', new_level);
						wagon.querySelector('img').setAttribute('src', `./assets/img/wagon/${name}_${new_level}.png`);
						wagon.querySelector('.level').textContent = new_level;
						update_train();
					}
				}, { passive: false });
			}
			wagon.addEventListener('mouseenter', (e) => {
				if (mouse_state.is_down) {
					const index = parseInt(wagon.getAttribute('wagon-index'));
					if (index !== mouse_state.select_wagon_index) {
						wagon.classList.add('insert');
					} else {
						img.src = img.getAttribute('origin-src');
					}
				}
			});
			wagon.addEventListener('mouseleave', (e) => {
				if (mouse_state.is_down) {
					wagon.classList.remove('insert');
				}
			});
			wagon.addEventListener('mouseup', (e) => {
				if (mouse_state.is_down) {
					const train = document.querySelector('.train-container');
					train.querySelectorAll('.wagon-container,.engine-container').forEach((elm) => {
						elm.classList.remove('insert');
						elm.classList.remove('dragging');
					});
					train.insertBefore(mouse_state.select_wagon_elm, wagon);
					mouse_state.is_down = false;
					update_train();
				}
			});
		}
	}

	/** get_now_date_str()
	 */
	function get_now_date_str() {
		var date = new Date();
		var y = date.getFullYear();
		var M = date.getMonth() + 1;
		var d = date.getDate();
		var H = date.getHours();
		var m = date.getMinutes();
		var s = date.getSeconds();
		var str = y + '-'
		  + ('00' + M).slice(-2) + '-'
		  + ('00' + d).slice(-2) + '-'
		  + ('00' + H).slice(-2) + '-'
		  + ('00' + m).slice(-2) + '-'
		  + ('00' + s).slice(-2);
		return str;
	}
	
	/** get_queries(url)
	 */
	function get_queries(url) {
		const url_str = String(url || window.location);
		const query_str = url_str.slice(url_str.indexOf('?') + 1);
		const queries = {};
		if (!query_str) {
			return queries;
		}
		query_str.split('&').forEach((query_str) => {
			const query_arr = query_str.split('=');
			queries[query_arr[0]] = query_arr[1];
		});
		return queries;
	}

	/** get_lang(key)
	 */
	function get_lang(key) {
		return LANG[key] ? LANG[key][LANG_KEY] : '';
	}

	/** trigger(elm, type)
	 */
	function trigger(elm, type) {
		const event = document.createEvent('Event');
		event.initEvent(type, false, true);
		elm.dispatchEvent(event);
	}

	/** init()
	 */
	const init = () => {
		if (IS_TOUCH_DEVICE) {
			document.body.classList.add('touch-device');
		} else {
			document.body.classList.add('mouse-device');
		}
		// ======================
		// 翻訳する
		// ======================
		document.querySelectorAll('[trans-key]').forEach((elm) => {
			const key = elm.getAttribute('trans-key');
			const text = get_lang(key);
			const type = elm.getAttribute('trans-type');
			if (text) {
				if (type === 'html') {
					elm.innerHTML = text;
				} else {
					elm.textContent = text;
				}
			}
		});
		// ======================
		// オプションを作成する
		// ======================
		{
			const content = document.getElementById('content');
			const container = document.querySelector('.wagon-level-options');
			WAGON_DEFINE.forEach((wagon) => {
				const name = wagon[0];
				const input = document.createElement('input');
				const id = `level_visible_settings_${name}`;
				input.setAttribute('type', 'checkbox');
				input.setAttribute('id', id);
				const label = document.createElement('label');
				label.setAttribute('for', id);
				label.textContent = get_lang(name);
				container.append(input);
				container.append(label);
			});
			document.getElementById('is_level_visible').addEventListener('change', function(e) {
				const settings = document.querySelector('.wagon-level-options');
				savedata['settings']['is_level_visible'] = this.checked;
				save_storage();
				if (this.checked) {
					content.classList.add('level-is-visible');
				} else {
					content.classList.remove('level-is-visible');
				}
			});
			document.getElementById('is_charger_enabled').addEventListener('change', function(e) {
				savedata['settings']['is_charger_enabled'] = this.checked;
				save_storage();
				if (this.checked) {
					content.classList.add('charger-is-enabled');
				} else {
					content.classList.remove('charger-is-enabled');
				}
			});
			document.getElementById('is_ghost_enabled').addEventListener('change', function(e) {
				savedata['settings']['is_ghost_enabled'] = this.checked;
				save_storage();
				if (this.checked) {
					content.classList.add('ghost-is-enabled');
				} else {
					content.classList.remove('ghost-is-enabled');
				}
			});
			document.getElementById('is_only_max_wagon_visible').addEventListener('change', function(e) {
				savedata['settings']['is_only_max_wagon_visible'] = this.checked;
				save_storage();
				if (!this.checked) {
					content.classList.add('not-max-wagon-is-enabled');
				} else {
					content.classList.remove('not-max-wagon-is-enabled');
				}
			});
		}
		// ======================
		// ロードする
		// ======================
		load_storage();
		// ======================
		// 初期列車を準備する
		// ======================
		{
			const train = document.querySelector('.train-container');
			[
				'TankWagon',
				'StorageWagon',
				'CraftingWagon',
			].forEach((wagon) => {
				add_wagon(wagon, 1, 3);
			});
			// エンジン
			const container = document.createElement('div');
			container.setAttribute('wagon-count-max', 5);
			container.classList.add('engine-container');
			const img = document.createElement('img');
			const src = `./assets/img/engine/Engine_1.png`;
			img.setAttribute('src', src);
			img.setAttribute('title', '');
			img.setAttribute('draggable', 'false');
			container.append(img);
			set_wagon_event(container, false);
			train.append(container);
			if (IS_TOUCH_DEVICE) {
				window.addEventListener('touchstart', (e) => {
					if (mouse_state.is_down) {
						mouse_state.is_down = false;
						mouse_state.select_wagon_elm.remove();
						train.querySelectorAll('.wagon-container,.engine-container').forEach((elm) => {
							elm.classList.remove('insert');
							elm.classList.remove('dragging');
						});
						update_train();
					}
				});
			} else {
				window.addEventListener('mouseup', (e) => {
					if (mouse_state.is_down) {
						mouse_state.is_down = false;
						mouse_state.select_wagon_elm.remove();
						train.querySelectorAll('.wagon-container,.engine-container').forEach((elm) => {
							elm.classList.remove('insert');
							elm.classList.remove('dragging');
						});
						update_train();
					}
				});
			}
		}
		// ======================
		// ダウンロードできるようにする
		// ======================
		document.querySelectorAll('.download-button').forEach((elm) => {
			elm.addEventListener(EVENT_CLICK, (e) => {
				try {
					const size = elm.getAttribute('download-size');
					const type = elm.getAttribute('download-type');
					// canvasに列車を描く
					const canvas = document.createElement('canvas');
					const ctx = canvas.getContext('2d');
					const wagons = document.querySelectorAll('.train-container .wagon-container');
					const engine = document.querySelector('.train-container .engine-container img');
					canvas.width = (1 + wagons.length) * 320 + 150;
					canvas.height = 360;
					if (type === 'jpg') {
						ctx.fillStyle = 'white';
						ctx.fillRect(0, 0, canvas.width, canvas.height);
					}
					ctx.font = 'bold 90px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", Arial,"Hiragino Kaku Gothic ProN", "Hiragino Sans", "BIZ UDPGothic", Meiryo, sans-serif';
					ctx.textAlign = 'left';
					ctx.textBaseline = 'top';
					wagons.forEach((wagon, i) => {
						const img = wagon.querySelector('img');
						const level = wagon.getAttribute('wagon-level');
						const charged_level = wagon.getAttribute('wagon-charged-level');
						let x = -150 + i * 320;
						if (wagon.classList.contains('ghosting') && savedata['settings']['is_ghost_enabled']) {
							ctx.globalAlpha = 0.3;
						}
						ctx.drawImage(img, x, 0);
						ctx.globalAlpha = 1;
						if (savedata['settings']['is_level_visible']) {
							const str = savedata['settings']['is_charger_enabled'] ? charged_level : level;
							const color = savedata['settings']['is_charger_enabled'] && wagon.classList.contains('charging') ? '#f44336' : '#444';
							ctx.fillStyle = color;
							ctx.fillText(str, x + 160, 0);
						}
					});
					ctx.drawImage(engine, -100 + wagons.length * 320, 0);
					// 縮尺
					let s_canvas;
					if (size === 'large') {
						s_canvas = canvas;
					} else {
						s_canvas = document.createElement('canvas');
						const s_ctx = s_canvas.getContext('2d');
						let w, h;
						if (size === 'medium') {
							w = canvas.width / 2;
							h = canvas.height / 2;
						} else {
							w = canvas.width / 4;
							h = canvas.height / 4;
						}
						s_canvas.width = w;
						s_canvas.height = h;
						s_ctx.drawImage(canvas, 0, 0, w, h);
					}
					// 描いたcanvasをダウンロードする
					const link = document.createElement('a');
					if (type === 'jpg') {
						link.href = s_canvas.toDataURL('image/jpeg', 0.8);
					} else {
						link.href = s_canvas.toDataURL('image/png');
					}
					link.download = `Train-${get_now_date_str()}.${type}`;
					link.click();
					
				} catch (e) {
					console.error(e);
					alert(get_lang('error-download'));
				}
			});
		});
		// ======================
		// エンジン選択を作成する
		// ======================
		for (let i = 1; i <= ENGINE_COUNT; i++) {
			const j = Math.min(i, 6);
			const engines = document.querySelector('.engines');
			const container = document.createElement('div');
			container.setAttribute('wagon-count-max', j + 4);
			container.classList.add('engine-container');
			const img = document.createElement('img');
			const src = `./assets/img/engine/Engine_${i}.png`;
			img.setAttribute('src', src);
			img.setAttribute('title', '');
			img.setAttribute('draggable', 'false');
			container.append(img);
			img.addEventListener(EVENT_CLICK, (e) => {
				document.body.style.setProperty('background-image', `url(./assets/img/header/${j}.jpg)`);
				document.querySelector('.train-container .engine-container img').setAttribute('src', img.src);
				document.querySelector('.train-container .engine-container').setAttribute('wagon-count-max', j + 4);
				update_train();
			});
			engines.append(container);
		}
		// ======================
		// ワゴン選択を作成する
		// ======================
		WAGON_DEFINE.forEach((wagon) => {
			const name = wagon[0];
			const count = wagon[1];
			const wagons = document.querySelector('.wagons');
			for (let i = 1; i <= count; i++) {
				const container = document.createElement('div');
				container.classList.add('wagon-container');
				const level_class = (i === count) ? 'max-level' : 'not-max-level';
				container.classList.add(level_class);
				const p = document.createElement('p');
				p.textContent = i;
				p.classList.add('level');
				container.append(p);
				const img = document.createElement('img');
				const src = `./assets/img/wagon/${name}_${i}.png`;
				img.setAttribute('src', src);
				img.setAttribute('title', `${get_lang(name)} Lv${i}`);
				img.setAttribute('draggable', 'false');
				container.append(img);
				container.addEventListener(EVENT_CLICK, (e) => {
					add_wagon(name, i, count);
					update_train();
				});
				wagons.append(container);
			}
		});
		setTimeout(() => {
			document.getElementById('content').classList.add('showed');
		}, 100);
	};

	/** onload()
	 */
	function onload() {
		document.body.style.setProperty('background-image', 'url(./assets/img/header/1.jpg)');
	}

	/** window.addEventListener
	 */
	window.addEventListener('DOMContentLoaded', init);
	window.addEventListener('load', onload);
})();