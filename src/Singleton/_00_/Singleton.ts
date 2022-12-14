class Singleton {
  private static uniqueInstance: Singleton;

  private Singleton() {}

  public static getInstance(): Singleton {
    if (this.uniqueInstance === null) {
      this.uniqueInstance = new Singleton();
    }
    return this.uniqueInstance;
  }
  
}

export default Singleton;
