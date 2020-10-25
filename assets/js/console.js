const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
	help:
		'Возможные команды: <span class="code">youtube</span>, <span class="code">vk</span>, <span class="code">steam</span>, <span class="code">discord</span>, <span class="code">donate</span>, <span class="code">games</span>, <span class="code">info</span>',
	admin_8080:
		'Список секретных комманд: <span class="code">bratishkin</span>, <span class="code">disadisadisa</span>, <span class="code">files</span>, <span class="code">server</span>',
	youtube:
		"Ютуб канал: <a href='https://www.youtube.com/c/REINTHIS?sub_confirmation=1' target='_blank' class='success link'>youtube.com/ReinThis</a>",
	vk:
		"Страница VK: <a href='https://vk.com/rossovskii' target='_blank' class='success link'>vk.com/rossovskii</a>",
	steam:
		"Стим: <a href='https://steamcommunity.com/id/ThisRein/' target='_blank' class='success link'>steamcommunity.com/id/ThisRein</a>",
	discord:
		"Дискорд: REIN#7777",
	donate:
		"QIWI Копилка: <a href='https://qiwi.me/beae027f-43d9-4dd4-a5a9-217ae2361f39' target='_blank' class='success link'>qiwi.me/beae027f-43d9-4dd4-a5a9-217ae2361f39</a>",
	qiwi:
		"QIWI Копилка: <a href='https://qiwi.me/beae027f-43d9-4dd4-a5a9-217ae2361f39' target='_blank' class='success link'>qiwi.me/beae027f-43d9-4dd4-a5a9-217ae2361f39</a>",
	bratishkin:
		"Мартышкин? Знаю его, ахуенный чел))",

	disadisadisa:
		"Слышь бес ебливый, ты вообще берега путаешь хуeплет дырявый. Ты бля водолаз не ровно стелишь, так хуле ща люди к тебе кабанчиком метнутся, шуману кому надо, потом опрокинут тебя черт фаршмачный, давай нахуй адресок свой урони с циферками, тебя наберут люди проедешься с ними по лесам, флору фауну посмотришь, белочек покормишь, на жопу можешь не приседать, там хуле псе ровно, спортики схвачены, подъедут скажут от Якута, там уже решать будем что с тобой делать, пальцы отрезать или руки прибить к дереву ебло нахуй. Ты вообще нахуй кто бля, никто ежжи, я бля тот кто тебе лещей раздаст и за щеку накидает, защеканец, давай нахуй ща Айбек с Асланом приедут к тебе, будут из тебя котлетки ебать делать, крест ты нахуй, давай гасись гагус ебливый",	
	files:
		'<span class="code">У Вас недостаточно прав для просмотра хранилища</span>',
	info:
		'<span class="code">У Вас недостаточно прав для просмотра информации</span>',
	server:
		'<span class="code">Соединение с сервером успешно установлено . . .</span>',
	hack:
		'<span class="code">Ооо дааа, хакни эту суку полностью! (Подсказка: Для взлома, Вам надо разгадать последние цифры команды: hack_***)</span>',
	hack_132:
		'<span class="code">Password: 8080 (Для подробной информации введите команду: admin)</span>',
	admin:
		'<span class="code">Ошибка доступа. Для авторизации введите: admin_****(admin_Пароль)</span>',
	dev:
		'<span class="code">Ошибка доступа. Для авторизации введите: admin_****(admin_Пароль)</span>',
	yt:
		"Ютуб канал: <a href='https://www.youtube.com/c/REINTHIS?sub_confirmation=1' target='_blank' class='success link'>youtube.com/ReinThis</a>",
	vkontakte:
		"Страница VK: <a href='https://vk.com/rossovskii' target='_blank' class='success link'>vk.com/rossovskii</a>",
	game:
		"Игровой раздел: <a href='https://rein.tk/games' target='_blank' class='success link'>rein.tk/games</a>",
	games:
		"Игровой раздел: <a href='https://rein.tk/games' target='_blank' class='success link'>rein.tk/games</a>",
	ds:
		"Дискорд: REIN#7777",
	hi:
		"Приветик :)",
	hello:
		"Здраствуйте <3"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">Команды не существует: ${input}</div>`;
    console.log("Команда не найдена");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
