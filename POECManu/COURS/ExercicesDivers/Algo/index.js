function checkPalindrom(palindrome)


{

    for( var i = palindrome.length; i > 0; i-- )
    {
        if( palindrome[i] = palindrome.charAt(palindrome.length)-1 )
        {
            document.write('Le mot est un palindrome');
        }else{
            document.write('Pas un palindrome! Veuillez recommencer');
        }
    }
}
checkPalindrom('leMotpeutêtre');