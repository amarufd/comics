#!/usr/bin/perl


use strict;
use warnings;
use Data::Dumper qw(Dumper);
 
print Dumper \@ARGV;

my $FILE = $ARGV[0];
my $FILEOUT = $ARGV[1]||"RUTS_UNICOS.txt";

system "curl '$FILE' > '$FILE'" ;

my $CENT = $ARGV[2]|| 0;
my $CSAL = $ARGV[3]|| 9999999;


if (defined $FILE) {


##use DateTime;

##my $dt   = DateTime->now;   # Stores current date and time as datetime object
##my $date = $dt->ymd('');   # Retrieves date as a string in 'yyyy-mm-dd' format
##my $time = $dt->hms('');   # Retrieves time as a string in 'hh:mm:ss' format

##my $wanted = "$date$time";   # creates 'yyyy-mm-dd hh:mm:ss' string
##print "$wanted\n";


	# open(my $fh, '<:encoding(UTF-8)', $filename)
	# or die "Could not open file '$filename' $!";

	# while (my $row = <$fh>) {
		# chomp $row;
		# #print "$row\n";

		# $row =~ /^(.*)\t(.*)$/;
		# my $RUT = $1;
		# my $ID = $2;
		# $ID = sprintf("%8s", $ID);
		# $ID=~ tr/ /0/;			
		# $RUT = sprintf("%10s", $RUT);
		# $RUT=~ tr/ /0/;				
		# system "echo '$RUT\t$ID' >> FILEORDER";		
		# #print "$RUT\t$ID\n";
	# }
	
	##system "sort $FILE > $wanted";

#close fh;

	

	my $countall=0;
	my $auxid=0;
	my $rut_actual=1;
	
	
	system "> $FILEOUT";
	
	 my $filename = $FILE;	
	##$filename = "$wanted";
	
	open(my $fh, '<:encoding(UTF-8)', $filename)
	or die "Could not open file '$filename' $!";
	
	
	while (my $row = <$fh>) {
		chomp $row;
		#print "$row\n";


		if(($countall>=$CENT) && ($countall<=$CSAL)){
		
			
			$row =~ /^(.*)\t(.*)$/;
			my $RUT = $1;
			my $ID = $2;
			
			#system "echo '$RUT\t$ID'";

			if($RUT == $rut_actual)	
			{
				if($ID<$auxid){
					$auxid=$ID;				
				}
			} else {
			
				system "echo '$rut_actual\t$auxid' >> $FILEOUT";
			
				$rut_actual = $RUT;
				$auxid = $ID;
							
			}
			
			if(($countall%100)==0){
				
				print "$countall\n";				
				
			}
			
			
			
			#print "$RUT\t$ID\n";
		}
		$countall++;
	}
}





