var axios = require('axios');

const { COUNT = 10, THREADS = 3, TEMPLATE = '*', TIMEOUT = 1000 } = process.env;

/**
 * Replaces '*'s in template with random strings like '7s23mnrkfkj1enhrwk4374' and returns a string
 * @param {string} template - string like https://google.com?q=*&qq=*
 * @returns {string} - result like https://google.com?q=7s23mnrkfkj1enhrwk4374&qq=xp7hc9yefxv9vqxuafp
 */
const randomize = template => template.replace(
    /\*/g,
    () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
);

class Storage {
    constructor(count, threads, template) {
        this.count = +count;
        this.threads = +threads;
        this.template = template;
        this.source = new Array(this.count).fill(null).map(() => randomize(this.template));
    }

    get one() {
        if (this.source.length === 0) return null;
        return this.source.shift();
    }

    async startOne() {
        console.log('new thread started');
        let one;
        while (one = this.one) {
            try {
                await axios.get(one, { timeout: TIMEOUT });
                console.log('got ' + one);
            } catch (error) {
                console.log(error.message);
            }
        }
    }
    
    start() {
        console.log(`starting ${this.threads} threads...`);
        for (let i = 0; i < this.threads; i++) this.startOne();
    }
}

new Storage(COUNT, THREADS, TEMPLATE).start();