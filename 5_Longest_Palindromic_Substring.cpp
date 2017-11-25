class Solution {
public:
    string longestPalindrome(string s) {
        /* **************: Time Limit Exceeded **********************
        string strSubs="",strMax="";
        int i,j,k,l,flag;
        for(i=1;i<s.size();i++){
            for(j=i+1;j<s.size();j++){
                strSubs.assign(s,i,j-i);
                flag=0;
                k=0;
                j=strSubs.size();
                while(k<=j){
                    if(strSubs[k]!=strSubs[j]){
                        flag++;
                    }    
                    k++,j--;
                }
                if(flag==0){
                    if(strSubs.size()>strMax.size()){
                        strMax=strSubs;
                    }
                }
            }
        }*/
        if (s.empty()) return "";
        if (s.size() == 1) return s;
        int i,j,k,max_len = 1,new_len,start=0;
        for(i = 0;i < s.size();){
            if(s.size()-i <= max_len/2 + 1) break;
            j=i;k=i;
            while(k<s.size()&&s[k] == s[k+1]) ++k;
            i=k+1;
            while(k < s.size() - 1&&j>0&&s[k+1]==s[j-1]) { ++k;--j; }
            new_len = k - j + 1;
            if(new_len>max_len){
                max_len = new_len;
                start = j;
            }
        }
        return s.substr(start,max_len);
    }
};