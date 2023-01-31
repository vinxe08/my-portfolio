export const sidebar = {
  open: 
  { top: -200,
    right: -200,
    height: '1500px',
    width: '1500px',
    borderRadius: 0,
    transition: {
      duration: 0.4,
    },
  },
  close: {
    top: '15px',
    right: '30px',
    height: '55px',
    width: '55px',
    borderRadius: '50%',
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

export const navButton = {
  topOpen: {
    rotate: '43deg',
    transition: {
      duration: 0.1,
      damping: 0,
    },
    top: 10,
  },
  topClose: {
    rotate: '0deg',
    top: 4,
    transition: {
      duration: 0.1,
    }
  },

  midOpen: {
    scale:0,
    transition: {
      duration: 0.1,
      damping: 0,
    },
  },
  midClose: {
    scale: 1,
    transition: {
      duration: 0.1,
    }
  },

  botOpen: {
    rotate: '-43deg',
    transition: {
      duration: 0.1,
      damping: 0,
    },
    top: 10,
  },
  botClose: {
    rotate: '0deg',
    top: 20,
    transition: {
      duration: 0.1,
    }
  },
}

export const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -200 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    }
  }
}

export const navbar = {
  open: {
    scale: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    scale: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1, delay: 1 }
  }
}

export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  },
};

export const letterContainer2 = {
  hidden: { 
    opacity: 1, 
    scale: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 1
    }
  },
  visible: {
    opacity: 1,
    scale: 1,
    
  }
};



