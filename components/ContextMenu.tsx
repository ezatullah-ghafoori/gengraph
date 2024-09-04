// components/ContextMenu.tsx
import React from 'react';

interface ContextMenuProps {
  x: number;
  y: number;
  visible: boolean;
  onClose: () => void;
  onLineTypeChange: (type: string) => void;
  onColorChange: (color: string) => void;
  onSizeChange: (size: number) => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, visible, onClose, onLineTypeChange, onColorChange, onSizeChange }) => {
  if (!visible) return null;

  return (
    <div
      style={{ position: 'absolute', left: x, top: y, backgroundColor: 'white', border: '1px solid gray', padding: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}
      onClick={onClose}
    >
      <div>
        <div>
          <label>Line Type:</label>
          <select onChange={(e) => onLineTypeChange(e.target.value)}>
            <option value="solid">Solid</option>
            <option value="dash">Dash</option>
            <option value="dot">Dot</option>
            <option value="dashdot">DashDot</option>
          </select>
        </div>
        <div>
          <label>Line Color:</label>
          <input type="color" onChange={(e) => onColorChange(e.target.value)} />
        </div>
        <div>
          <label>Line Width:</label>
          <input type="number" min="1" max="10" onChange={(e) => onSizeChange(Number(e.target.value))} />
        </div>
      </div>
    </div>
  );
};

export default ContextMenu;
