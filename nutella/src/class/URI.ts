class URI<T extends string | number | symbol> {
  private path: string;

  constructor(path: string) {
    this.path = path;
  }

  public get(variables?: Record<T, string>) {
    if (!variables) {
      return this.path;
    }

    const keys = Object.keys(variables);

    let copyPath = this.path;

    keys.forEach((value) => {
      copyPath = copyPath.replace(`{${value}}`, variables[value as T]);
    });

    return copyPath;
  }
}

export default URI;
