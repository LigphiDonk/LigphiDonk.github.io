import React from 'react';
import { Github, MessageSquare } from './Icons';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 animate-in fade-in duration-500">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">鍏充簬鎴?/h1>
        <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
          <p className="lead">
            浣犲ソ锛屾垜鏄?keepgo 鐨勫垱寤鸿€呫€傛垜鏄竴鍚嶆帰绱i鐨勬櫘閫氫汉銆?
          </p>
          <p>
            鍦ㄨ繖涓棩鏂版湀寮傜殑鎶€鏈椂浠ｏ紝鎴戠浉淇♀€滅郴缁熸€濈淮鈥濇槸瑙ｅ喅澶嶆潅闂鐨勫叧閿€傝繖涓崥瀹㈡槸鎴戞€濊€冦€佽褰曞拰鍒嗕韩鎶€鏈瑙ｄ笌鐢熸椿鎰熸偀鐨勬暟瀛楄姳鍥€傛垜涓昏鍏虫敞浠ヤ笅棰嗗煙锛?
          </p>
          <ul>
            <li><strong>鐢熸椿鍝叉€?/strong>锛氳褰曠偣婊存兂娉曘€?/li>
            <li><strong>AI 鍩虹璁炬柦</strong>锛歀LM 搴旂敤寮€鍙戙€丷AG 鏋舵瀯銆丄gent 璁捐妯″紡銆?/li>
            <li><strong>璇讳功鎰熸偀</strong>锛氭祻瑙堜功绫嶃€?/li>
          </ul>
          <p>
            闄ゅ锛屾垜涔熺儹琛蜂簬鎽勫奖鍜岀骞诲皬璇淬€傛垜鐩镐俊鎶€鏈簲褰撴湇鍔′簬浜烘枃锛屽垱閫犳洿缇庡ソ鐨勪綋楠屻€?
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
         <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">鎶€鏈爤</h3>
            <div className="flex flex-wrap gap-2">
               {['React', 'TypeScript', 'Node.js', 'Rust', 'Tailwind', 'Next.js', 'PostgreSQL', 'Docker'].map(skill => (
                  <span key={skill} className="text-xs px-2 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md text-gray-600 dark:text-gray-300">
                    {skill}
                  </span>
               ))}
            </div>
         </div>
         <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">鑱旂郴鏂瑰紡</h3>
             <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                   <MessageSquare className="w-4 h-4" /> 
                   <span>contact@keepgo.icu</span>
                </li>
                <li className="flex items-center gap-2">
                   <Github className="w-4 h-4" />
                   <span>@keepgoGithub</span>
                </li>
             </ul>
         </div>
      </div>
    </div>
  );
};

export default AboutPage;
