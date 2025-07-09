import React from 'react';
import { Heart, Music, Trophy, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-red-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded-full">
                <Music className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Rickroll Challenge</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              La sfida definitiva tra amici nel mondo del rickrolling. 
              Creatività, fair play e tanto divertimento!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-yellow-400" />
              <span>Partecipanti</span>
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                  Z
                </div>
                <span className="text-gray-300">Zuhns - 3 rickroll</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-sm font-bold">
                  J
                </div>
                <span className="text-gray-300">John - 2 rickroll</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Espansioni Future</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Sistema di segnalazione rickroll</li>
              <li>• Login partecipanti</li>
              <li>• Tutorial rickroll perfetto</li>
              <li>• Statistiche avanzate</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-gray-300">Made with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span className="text-gray-300">for the ultimate rickroll experience</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 The Ultimate Rickroll Challenge. Never gonna give you up! 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;