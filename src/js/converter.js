export default class ArrayBufferConverter {
  load(buffer) {
    const bufferCheck = [];
    for (let i = 0; i < buffer.length; i += 1) {
      bufferCheck[i] = String.fromCharCode(buffer[i]);
    }
    return bufferCheck;
  }
}
