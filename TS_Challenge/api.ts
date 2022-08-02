// localStorage API
/* 
localStorage.setItem(<key>, <value>)
localStorage.getItem(<key>)
localStorage.clearItem(<key>)
localStorage.clear()
 */

// geolocation API
/* 
geolocation.getCurrentPosition(successFn)
geolocation.getCurrentPosition(successFn, errorFn)
geolocation.getCurrentPosition(successFn, errorFn, optionsObj)
geolocation.watchPosition(success)
geolocation.watchPosition(success, error)
geolocation.watchPosition(success, error, options)
geolocation.clearWatch(id)
 */

// 제네릭, 다형성, 클래스, 인터페이스 합치기

interface SStorage<T> {
    [key: string]: T
}

class LocalStorage<T> {
    private storage: SStorage<T> = {}
    set(key: string, value: T) {
        this.storage[key] = value
    }
    remove(key: string) {
        delete this.storage[key]
    }
    get(key: string): T {
        return this.storage[key]
    }
    clear() {
        this.storage = {}
    }
}

const stringsStorage = new LocalStorage<string>()
stringsStorage.get("ket")
stringsStorage.set("hello", "how r u")

const booleanStorage = new LocalStorage<boolean>()
booleanStorage.get("xxx")
booleanStorage.set("hello", true)