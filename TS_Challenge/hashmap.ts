type Words = {
    // object의 Type을 선언 해야할 때 사용
    // 제한된 양의 property 혹은 key를 가지는 타입을 정의해주는 방법
    // property에 대해 타입만 알고 있을 경우 사용
      [key: string]: string
  }
  
  class Dict {
      private words: Words
      constructor() {
          this.words = {}     // 수동 초기화
      }
      add(word: Word) {	// class를 Type처럼 사용함
          if(this.words[word.term] === undefined) {   // 아직 단어가 사전에 존재하지 않는다면
              this.words[word.term] = word.def;
          }
      }
      get(term: string) {
          return this.words[term]
      }
      delete(word: Word) {
          delete this.words[word.term]
          if(this.words[word.term] === undefined) {
              console.log("deleted !")
          }
      }
      update(term: string, def: string) {
          if(this.words[term] !== undefined) {   // 단어가 사전에 존재한다면
              this.words[term] = def;
          }
      }
      showAll() {
          console.log(Object.keys(this.words))
      }
      count() {
          const counter = Object.keys(this.words)
          console.log(counter.length)
      }
  }
  
  class Word {
      constructor(
          public term: string,
          public def: string
      ) {}
  }
  
  const kimchi = new Word("kimchi", "한국의 음식");
  const potato = new Word("potato", "내가 먹은 것");
  const pizza = new Word("pizza", "재우's favorite");
  const burger = new Word("burger", "영범's favorite");
  const soju = new Word("soju", "승백's hater");
  
  const dict = new Dict()
  
  dict.add(kimchi);