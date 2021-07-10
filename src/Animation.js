export const pageAnimation = {
	hidden: {
		opacity: 0,
		y: 300
	},
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.5 }
	},
	exit: {
		opacity: 0,

		transition: { duration: 0.5, delay: 0.2 }
	}
};

export const titleAnim = {
	hidden: {
		y: 200
	},
	show: {
		y: 0,
		transition: { duration: 1, ease: 'easeOut', staggerDirection: -1 }
	}
};

export const fade = {
	hidden: {
		opacity: 0
	},
	show: {
		opacity: 1,
		transition: { duration: 1, ease: 'easeOut' }
	}
};

export const photoAnim = {
	hidden: {
		opacity: 0,
		scale: 1.5
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
			ease: 'easeOut'
		}
	}
};
export const formAnim = {
	hidden: {
		opacity: 0,
		scale: 0.5
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
			ease: 'easeOut'
		}
	}
};
export const buttonAnim = {
	hidden: {
		opacity: 0,
		x: -100
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
			ease: 'easeOut'
		}
	}
};

export const slider = {
	hidden: {
		x: '-130%',
		skew: '45deg'
	},
	show: {
		x: '100%',
		skew: '0deg',
		transition: { duration: 0.5, ease: 'easeOut' }
	}
};

export const sliderContainer = {
	hidden: {
		opacity: 1
	},
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.1, ease: 'easeOut' }
	}
};

export const LineAnim = {
	hidden: {
		width: '0%'
	},
	show: {
		width: '100%',
		transition: {
			duration: 1,
			ease: 'easeOut'
		}
	},
	exit: {
		width: '100%'
	}
};
