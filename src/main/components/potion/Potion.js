import PropTypes from "prop-types";

class Potion {
  constructor(name, time) {
    this.name = name;
    this.time = time;
    if (!time) {
      this.time = new Date();
    }
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    time: PropTypes.instanceOf(Date)
  }
}

class PotionService {
  static brewRandomPotion() {
    let types = Object.entries(PotionTypes);
    let names = types.map(([k, v]) => v.name);
    let rand = Math.floor(Math.random() * types.length);
    let pot = names[rand];
    return new Potion(pot);
  }

}

export default PotionService;

class PotionType {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  getName() {
    return this.name;
  }

  getColor() {
    return this.color;
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }
}

export const PotionTypes = {
  FIZZ: new PotionType("fizz", "warning"),
  POP: new PotionType("pop", "success"),
  TONIC: new PotionType("tonic", "info"),
  MAGIC: new PotionType("magic", "danger")
};

Object.defineProperty(PotionTypes, "findByName", {
  value: (name) => {
    return PotionTypes[name.toUpperCase()];
  },
  enumerable: false
});