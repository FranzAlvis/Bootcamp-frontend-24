class Seat {
    #isAvailable
    constructor() {
        this.#isAvailable = false;
    }
    reserve() {
        this.#isAvailable = true;
    }
}

class Cinema {
    #create;
    #seat;
    constructor(columns, rows) {
        this.#create = []
        this.#seat = new Seat();
        for (let i = 0; i < columns; i++) {
            this.#create[i] = []
            for (let j = 0; j < rows; j++) {
                this.#create[i][j] = '0';
            }
        }
    }

    reserve(column, row) {
        if (this.#create[column][row] === '0') {
            this.#create[column][row] = '1';
            this.#seat.reserve();
        } else {        
            console.log('Seat is already reserved')
        }
    }
    showCine() {
        console.log(this.#create)
    }
}

const cine = new Cinema(5, 5);
cine.reserve(2, 2);
cine.showCine()
cine.reserve(2, 4);
cine.showCine()