class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        string strtmp="",strmax="",ch,subs;
        int i;
        //strtmp.assign(s,0,1);
        for(i =0;i<s.size();i++){
            ch.assign(s,i,1);
            if(strtmp.find(ch)+1){
                if(strtmp.size()>strmax.size()){
                    strmax =strtmp;
                }
                subs.assign(s,0,i);
                strtmp = subs.substr(subs.rfind(ch)+1,i-subs.rfind(ch)-1);
            }
            strtmp +=ch;
        }
        if(strtmp.size()>strmax.size()){
            strmax =strtmp;
        }
        //for(i=0;i<s.size();i++){
          //  ch.assign(s,i,1);
            //if(strmax.find(ch)==-1){
            //    strmax +=ch;
           // }
        //
        return strmax.size();
    }
};