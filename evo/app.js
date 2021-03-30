function debug(msg) {
	//console.log(msg);
}

class Command {
	static rand(program, transformer) {
		const items = [
			new CommandGo(program, transformer),
			new CommandRotate(program, transformer),
		];

		return items[Math.floor(Math.random() * items.length)];
	}

	constructor(program, transformer) {
		this.program = program;
		this.transformer = transformer;
		this.bot = program.bot;
	}

	bot() {
		return this.program.bot;
	}
}

class CommandGo extends Command {
	execute() {
		debug('go');
		const speed = 5;
		this.transformer.move({ forward: speed });
	}
}

class CommandRotate extends Command {
	constructor(program, transformer) {
		super(program, transformer);
		this.direction = Math.random() < 0.5 ? -1 : 1;
	}

	execute() {
		debug('rotate');
		const angle = 15;
		this.transformer.rotate(angle * this.direction);
	}
}

class Transformer {
	constructor(bot, world) {
		this.bot = bot;
		this.world = world;
	}

	move(options) {
		this.bot.x += options.forward * Math.cos(this.bot.angle * Math.PI / 180);
		this.bot.y += options.forward * Math.sin(this.bot.angle * Math.PI / 180);



		if(this.bot.x < 0) {
			this.bot.x = this.world.svg.node.clientWidth - 1;
		}

		if(this.bot.x > this.world.svg.node.clientWidth) {
			this.bot.x = 1;
		}

		if(this.bot.y < 0) {
			this.bot.y = this.world.svg.node.clientHeight - 1;
		}

		if(this.bot.y > this.world.svg.node.clientHeight) {
			this.bot.y = 1;
		}		

		this.bot.redraw();
	}

	rotate(angle) {
		this.bot.angle += angle;
		this.bot.redraw();
	}
}

class Program {
	constructor(bot) {
		this.bot = bot;
		this.commands = [];
		this.currentCommand = 0;
	}

	step() {
		const command = this.commands[this.currentCommand++];
		command.execute();
		
		if(this.currentCommand == this.commands.length) {
			this.currentCommand = 0;
		}
	}

	generate() {
		// this.commands = [
		// 	new CommandGo(this, this.bot.transformer),
		// 	new CommandRotate(this, this.bot.transformer),
		// ];
		// return 

		for(let i = 0; i < 20; i++) {
			const command = Command.rand(this, this.bot.transformer);
			this.commands.push(command);
		}
	}
}

class Bot {
	constructor(world) {
		this.world = world;
		this.transformer = new Transformer(this, this.world);
		this.program = new Program(this);
		this.program.generate();
		// middle of the field
		this.x = world.svg.node.clientWidth / 2; 
		this.y = world.svg.node.clientHeight / 2;
		this.angle = 0;

		// size of shulker
		const size = 10;

		//const c1 = this.world.svg.circle(this.x, this.y, 10);
		this.spline = this.world.svg.rect(this.x, this.y, size, size);

		const randomColor = Math.floor(Math.random()*16777215).toString(16);
		this.spline.attr({
			fill: this.world.svg.gradient("l(0, 0, 1, 0)#000-#" + randomColor),
		});
		//this.spline.gradient("r(1, 0.5, 0.5)#000-#fff");

		//c2.attr({fill: 'white'})

		//this.spline = this.world.svg.g(c1, c2);
		//this.spline.attr({x: 700})

		
		//this.spline.attr({transform: "t0,0s"});
		
	}

	step() {
		this.program.step();
	}

	redraw() {
		this.spline.attr({
			x: this.x, 
			y: this.y, 
			transform: 'rotate('+this.angle+' ' + (this.x + 5) + ' ' + (this.y + 5) + ')'
		})

		//this.spline.attr({transform: 'rotate('+this.angle+' ' + this.x + ' '+this.y+')'})
		
		//this.spline.attr({transform: "t10,0s"});
	}


}

class World {
	constructor() {
		this.svg = Snap("#svg");	
	}

}

function run() {
	const world = new World();

	bot1 = new Bot(world)
	setInterval( () => bot1.step(), 50)

	bot2 = new Bot(world)
	setInterval( () => bot2.step(), 100)
	
	bot3 = new Bot(world)
	setInterval( () => bot3.step(), 50)

	bot4 = new Bot(world)
	setInterval( () => bot4.step(), 100)
	
}
