import { useRef, useEffect } from 'react';

function HearingSimulator() {
  const videoRef = useRef();
  const filterRef = useRef();
  const gainRef = useRef();
  const contextRef = useRef();

  useEffect(() => {
    if (!videoRef.current) return;
    const context = new AudioContext();
    contextRef.current = context;
    const source = context.createMediaElementSource(videoRef.current);

    // Buat filter dan gain default (normal hearing)
    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 20000; // cutoff sangat tinggi (hampir melewatkan semua)
    filterRef.current = filter;

    const gainNode = context.createGain();
    gainNode.gain.value = 1.0; // volume normal
    gainRef.current = gainNode;

    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(context.destination);
  }, []);

  // Handler simulasi
  const simulateHighFreqLoss = () => {
    const ctx = contextRef.current;
    if (!ctx) return;
    filterRef.current.type = 'lowpass';
    filterRef.current.frequency.setValueAtTime(1000, ctx.currentTime); // potong frekuensi >1000Hz
  };
  const simulateLowFreqLoss = () => {
    const ctx = contextRef.current;
    if (!ctx) return;
    filterRef.current.type = 'highpass';
    filterRef.current.frequency.setValueAtTime(1000, ctx.currentTime); // potong frekuensi <1000Hz
  };
  const simulateConductiveLoss = () => {
    gainRef.current.gain.setValueAtTime(0.3, contextRef.current.currentTime); // volume jadi 30%
  };
  const simulateNormal = () => {
    filterRef.current.type = 'lowpass';
    filterRef.current.frequency.setValueAtTime(20000, contextRef.current.currentTime);
    gainRef.current.gain.setValueAtTime(1.0, contextRef.current.currentTime);
  };

  return (
    <div>
      <video ref={videoRef} src="https://youtu.be/sXJLT3kYdhk" controls style={{ width: 400 }} />
      <div style={{ marginTop: 8 }}>
        <button onClick={simulateNormal}>Normal</button>
        <button onClick={simulateHighFreqLoss}>Tuli Frek. Tinggi</button>
        <button onClick={simulateLowFreqLoss}>Tuli Frek. Rendah</button>
        <button onClick={simulateConductiveLoss}>Tuli Konduktif</button>
      </div>
    </div>
  );
}
export default HearingSimulator