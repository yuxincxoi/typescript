// LocalStorage API
// Use abstract class & generic
/* 
localStorage.setItem(<key>, <value>)
localStorage.getItem(<key>)
localStorage.clearItem(<key>)
localStorage.clear()
 */

// Geolocation API
// Use overloading
/* 
geolocation.getCurrentPosition(successFn)
geolocation.getCurrentPosition(successFn, errorFn)
geolocation.getCurrentPosition(successFn, errorFn, optionsObj)
geolocation.watchPosition(success)
geolocation.watchPosition(success, error)
geolocation.watchPosition(success, error, options)
geolocation.clearWatch(id)
 */



// LocalStorage API
abstract class LocalStorageAPI<T> {
    constructor(
        public key?: string,
        public value?: T
    ) {}
}

class LocalStorage<T> extends LocalStorageAPI<T> {
    private storage =  {} 
    setItem(key: string, value: T) {
        this.storage[key] = value
    }
    getItem(key: string): T {
        return this.storage[key]
    }
    clearItem(key: string) {
        delete this.storage[key]
    }
    clear() {
        this.storage = {}
    }
}

const stringsStorage = new LocalStorage<string>()
stringsStorage.setItem("hi", "bye")
stringsStorage.getItem("hi")



// Geolocation API
interface Pos extends Err, Opt { 
    coords: { 
        latitude: number,
        longitude: number,
        accuracy: number 
    }
}
interface Err extends Opt {
    code?: number,
    message?: string
}
interface Opt {
    enableHighAccuracy?: boolean,
    timeout?: number,
    maximumAge?: number
}

function successFn(pos: Pos) {
    const crd = pos.coords

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}
function errorFn(err: Err) {
    console.log(`ERROR(${err.code}): ${err.message}`);
}
const optionsObj : Opt = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

function success(pos: Pos) {
    const crd = pos.coords;

    console.log('Your new position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}
function error(err: Err) {
    console.log('ERROR(' + err.code + '): ' + err.message);
}
const options: Opt = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
}

const id = navigator.geolocation.watchPosition(success, error, options);

class GGeolocation {
    getCurrentPosition(successFn, errorFn, optionsObj) {
        navigator.geolocation.getCurrentPosition(successFn, errorFn, optionsObj)
    }
    watchPosition(success, error, options) {
        navigator.geolocation.watchPosition(success, error, options)
    }
    clearWatch(id) {
        navigator.geolocation.clearWatch(id);
    }
}

const newLocation = new GGeolocation()
newLocation.getCurrentPosition(successFn, errorFn, optionsObj)
newLocation.watchPosition(success, error, options)