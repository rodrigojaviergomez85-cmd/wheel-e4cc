let ctx: AudioContext | null = null;
const ac = () => (ctx ??= new AudioContext());
export const isMuted = () => typeof localStorage !== "undefined" && localStorage.getItem("e4cc-muted") === "1";

function tone(freq: number, dur: number, type: OscillatorType = "square", vol = 0.08, slideTo?: number) {
  if (isMuted()) return;
  try {
    const c = ac();
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, c.currentTime);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, c.currentTime + dur);
    g.gain.setValueAtTime(vol, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
    o.connect(g).connect(c.destination);
    o.start();
    o.stop(c.currentTime + dur + 0.02);
  } catch {}
}

export const sfx = {
  tick: () => tone(1400, 0.05),
  buzz: () => tone(140, 0.5, "sawtooth", 0.12),
  horn: () => { tone(220, 1.4, "sawtooth", 0.15); tone(277, 1.4, "sawtooth", 0.1); },
  boom: () => tone(180, 0.9, "sawtooth", 0.2, 30),
  ding: () => tone(880, 0.25, "sine", 0.12),
};
