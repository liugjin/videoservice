import { MessageType } from '../message'
import { parse } from './parser'

// prettier-ignore
const audioData = Buffer.from([128, 225, 117, 55, 79, 22, 14, 25, 166, 135, 0, 245, 0, 16, 9, 64, 1, 64, 159, 154, 208, 253, 108, 176, 235, 80, 155, 170, 36, 110, 165, 86, 196, 139, 206, 106, 75, 50, 197, 254, 218, 215, 141, 101, 86, 179, 169, 204, 111, 84, 85, 75, 168, 146, 185, 106, 171, 153, 151, 37, 75, 164, 76, 140, 166, 106, 225, 206, 97, 214, 75, 189, 200, 199, 234, 171, 252, 226, 185, 80, 212, 143, 27, 57, 86, 82, 85, 251, 214, 108, 247, 246, 122, 42, 132, 72, 50, 47, 80, 74, 144, 193, 74, 144, 22, 84, 76, 91, 71, 84, 126, 51, 148, 237, 58, 163, 212, 53, 4, 3, 168, 158, 29, 106, 238, 197, 132, 198, 173, 166, 147, 12, 2, 215, 88, 154, 59, 115, 62, 127, 40, 138, 8, 58, 167, 156, 158, 255, 70, 15, 208, 28, 26, 155, 142, 242, 148, 98, 104, 123, 116, 61, 186, 116, 72, 127, 87, 92, 26, 169, 24, 153, 100, 166, 88, 162, 84, 220, 176, 157, 219, 81, 108, 167, 225, 131, 83, 179, 38, 37, 237, 186, 150, 121, 39, 231, 5, 9, 11, 139, 85, 56, 160, 69, 83, 246, 87, 179, 177, 96, 185, 243, 245, 8, 176, 44, 68, 173, 108, 37, 181, 26, 34, 252, 236, 92, 253, 67, 94, 170, 229, 241, 182, 156, 237, 69, 159, 108, 14, 51, 16, 6, 134, 40, 221, 41, 233, 139, 6, 77, 146, 213, 86, 1, 74, 112, 17, 15, 38, 90, 186, 55, 252, 16, 199, 34, 118, 135, 28, 208, 101, 113, 23, 4, 230, 120, 14, 175, 205, 207, 13, 81, 34, 222, 86, 142, 13, 154, 120, 250, 89, 228, 10, 153, 215, 39, 187, 132, 37, 7, 36, 216, 214, 142, 202, 253, 107, 2, 9, 229, 50, 135]);

/*
 * The H264Handler is more thoroughly tested in the end2end test.
 *
 */
describe('AAC depayer', () => {
  it('should parse a normal package', () => {
    const cb = jest.fn()
    const hasHeader = true
    parse({ type: MessageType.RTP, data: audioData, channel: 0 }, hasHeader, cb)

    expect(cb).toHaveBeenCalledTimes(1)
    const msg = cb.mock.calls[0][0]
    expect(msg.data).toEqual(audioData.slice(16))
    expect(msg.type).toEqual(MessageType.ELEMENTARY)
    expect(msg.payloadType).toEqual(97)
  })
})
