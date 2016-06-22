#!/usr/bin/perl
use LWP::UserAgent;
use HTTP::Cookies;
use IO::File;
use warnings;
use strict;

my $ua = LWP::UserAgent->new;
$ua->cookie_jar(HTTP::Cookies->new(file => "cookies.txt", autosave => 1));

my $url = "https://www.facebook.com/login.php?login_attempt=1&lwv=110";

my $res = $ua->post($url,
{
email => 'amarud@gmail.com',
pass =>	'caminando.1'
});

my $content = $res->content;


my $fh = new IO::File(">alo.txt");
print $fh $content;
close $fh;

##print $content;
#
#######################################################################################################################################
##<TD>
##	<div align="right">
##	<font size="-1" face="Arial,Helvetica, sans-serif">
#	#		8,790.34
#	#	</font>
##</TD>
#
##my (@name) = $content =~ /(.+)/gi; 
#my $fh = new IO::File(">alo.txt");
#						#<!--Nombre de la celda-->
##my (@name) 	= $content =~ /<\!\-\-Nombre\s+?de\s+?la\s+?celda\-\->\s*?.+?<font\s+?size\=\"\-1\"\s+?face\=\"Arial\,\s+?Helvetica\,\s+?sans\-serif\">\s+?(.+?)\s+?<\/font>/gi; 
#my (@name) 	= $content =~ /<\!\-\-Nombre\s+?de\s+?la\s+?celda\-\->\s*?.+?<font\s+?size\=\"\-1\"\s+?face\=\"Arial\,\s+?Helvetica\,\s+?sans\-serif\">\s*(.+?)\s*<\/font>/gi; 
#my (@val) 	= $content =~ /<TD><div\s+?align\=\"right\">\s+?<font\s+?size\=\"\-1\"\s+?face\=\"Arial\,\s+?Helvetica\,\s+?sans\-serif\">(.+?)<\/font><\/TD>\s+?<HTML>/gi; 
#
#my $group	= 1 ;	
#my $code	= '' ;	
#
#my $endName=@name;
#my $inicio = 0; 
#
#do 
#{
#print $name[$inicio] . "\n";
#print $fh $group . "\t" . $code . "\t" . $name[$inicio] . "\t" . $val[$inicio] . "\t" . $name[$inicio] . "\n" ; 
# 
#$inicio++;  
#} while $inicio < $endName;
#
##foreach my $value (@name)
##{
##print "################################################################ \n";
##print $value . "\n" ;							
##print $fh $group . "\t" . $value . "\n";
##}