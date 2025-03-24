import { useState } from 'react';
import { ArrowDownUp, Wallet, ChevronDown, X } from 'lucide-react';
import { Token, tokens } from './lib';




function App() {
  const [amount, setAmount] = useState<string>('');
  const [fromToken, setFromToken] = useState<Token>(tokens[0]);
  const [toToken, setToToken] = useState<Token>(tokens[1]);
  const [slippage, setSlippage] = useState<string>('0.5');
  const [showFromTokens, setShowFromTokens] = useState(false);
  const [showToTokens, setShowToTokens] = useState(false);

  const handleSwap = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  const TokenSelector = ({ 
    show, 
    onClose, 
    onSelect, 
    selectedToken 
  }: { 
    show: boolean; 
    onClose: () => void; 
    onSelect: (token: Token) => void;
    selectedToken: Token;
  }) => {
    if (!show) return null;

    return (
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-[#1E293B]/90 backdrop-blur-xl rounded-2xl p-4 w-full max-w-md mx-4 shadow-xl border border-white/10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Select Token</h2>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-2 max-h-96 overflow-y-auto token-list">
            {tokens.filter(t => t.symbol !== selectedToken.symbol).map((token) => (
              <button
                key={token.symbol}
                onClick={() => {
                  onSelect(token);
                  onClose();
                }}
                className="w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors"
              >
                <img src={token.logo} alt={token.name} className="w-8 h-8 rounded-full" />
                <div className="text-left">
                  <div className="font-medium">{token.symbol}</div>
                  <div className="text-sm text-gray-400">{token.name}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };


  return (
    <div className="min-h-screen bg-[#0F172A] text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="grid-pattern"></div>
      <div className="blur-circle blur-circle-1"></div>
      <div className="blur-circle blur-circle-2"></div>
      <div className="blur-circle blur-circle-3"></div>
      
      {/* Crypto stickers */}
      <div className="crypto-sticker sticker-1"></div>
      <div className="crypto-sticker sticker-2"></div>
      <div className="crypto-sticker sticker-3"></div>
      <div className="crypto-sticker sticker-4"></div>
      <div className="crypto-sticker sticker-5"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] to-[#3B82F6]">
              Hyperswap
            </h1>
            <button className="flex items-center gap-2 bg-[#334155] px-4 py-2 rounded-lg hover:bg-[#475569] transition-colors">
              <Wallet className="w-4 h-4" />
              <span>Connect Wallet</span>
            </button>
          </div>

          {/* Swap Container */}
          <div className="swap-container bg-[#1E293B] rounded-2xl p-4">
            {/* From Token */}
            <div className="bg-[#334155] rounded-xl p-4 mb-2">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">From</span>
                <span className="text-gray-400">Balance: 0.00</span>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => {setShowFromTokens(true)}}
                  className="flex items-center gap-2 bg-[#475569] px-3 py-2 rounded-lg hover:bg-[#64748B] transition-colors"
                >
                  <img src={fromToken.logo} alt={fromToken.name} className="w-6 h-6 rounded-full" />
                  <span>{fromToken.symbol}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="bg-transparent text-2xl outline-none flex-1 text-right"
                />
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center -my-2 relative z-10">
              <button
                onClick={handleSwap}
                className="bg-[#334155] p-2 rounded-lg hover:bg-[#475569] transition-colors"
              >
                <ArrowDownUp className="w-5 h-5" />
              </button>
            </div>

            {/* To Token */}
            <div className="bg-[#334155] rounded-xl p-4 mt-2">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">To</span>
                <span className="text-gray-400">Balance: 0.00</span>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setShowToTokens(true)}
                  className="flex items-center gap-2 bg-[#475569] px-3 py-2 rounded-lg hover:bg-[#64748B] transition-colors"
                >
                  <img src={toToken.logo} alt={toToken.name} className="w-6 h-6 rounded-full" />
                  <span>{toToken.symbol}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  value={(parseFloat(amount || '0') * 1.5).toFixed(2)}
                  readOnly
                  placeholder="0.00"
                  className="bg-transparent text-2xl outline-none flex-1 text-right"
                />
              </div>
            </div>

            {/* Slippage Settings */}
            <div className="mt-4 bg-[#334155] rounded-xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Slippage Tolerance</span>
                <div className="flex gap-2">
                  {['0.5', '1.0', '2.0'].map((value) => (
                    <button
                      key={value}
                      onClick={() => setSlippage(value)}
                      className={`px-3 py-1 rounded-lg text-sm ${
                        slippage === value 
                          ? 'bg-[#3B82F6] text-white' 
                          : 'bg-[#475569] text-gray-300 hover:bg-[#64748B]'
                      }`}
                    >
                      {value}%
                    </button>
                  ))}
                  <input
                    type="number"
                    value={slippage}
                    onChange={(e) => setSlippage(e.target.value)}
                    className="w-16 px-2 py-1 bg-[#475569] rounded-lg text-sm text-center"
                    placeholder="Custom"
                  />
                </div>
              </div>
            </div>

            {/* Route Info */}
            <div className="mt-4 bg-[#334155] rounded-xl p-4">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Rate</span>
                <span>1 {fromToken.symbol} ≈ 1.5 {toToken.symbol}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>Route</span>
                <span>Direct</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>Price Impact</span>
                <span className="text-green-400">{'<0.1%'}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>Minimum Received</span>
                <span>{((parseFloat(amount || '0') * 1.5) * (1 - parseFloat(slippage) / 100)).toFixed(6)} {toToken.symbol}</span>
              </div>
            </div>

            {/* Swap Button */}
            <button className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold py-4 px-6 rounded-xl mt-4 transition-colors">
              Swap
            </button>
          </div>
        </div>
      </div>

      {/* Token Selection Modals */}
      <TokenSelector
        show={showFromTokens}
        onClose={() => setShowFromTokens(false)}
        onSelect={setFromToken}
        selectedToken={toToken}
      />
      <TokenSelector
        show={showToTokens}
        onClose={() => setShowToTokens(false)}
        onSelect={setToToken}
        selectedToken={fromToken}
      />
    </div>
  );
}

export default App;