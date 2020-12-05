interface T {
  curWord: string;
  playMode: boolean;
  gameActive: boolean;
  randArr: any[];
  errors: number;
  gameEnd: boolean;
}

const STATE: T = {
  curWord: '',
  playMode: false,
  gameActive: false,
  randArr: [],
  errors: 0,
  gameEnd: false,
};

export default STATE;
