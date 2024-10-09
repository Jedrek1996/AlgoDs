/*You have a RecentCounter class which counts the number of recent requests within a certain time frame.

Implement the RecentCounter class:

RecentCounter() Initializes the counter with zero recent requests.
int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

Example 1:
Input
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
Output
[null, 1, 2, 3, 3]

Explanation
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3

==========================================
Similar to the rate limiter question. Represent the calls at time T as a streaming array of integers using a queue.

For each call, add t to the end of the queue.
Maintain the queue so that the front is always within the time frame of t - 3000 (we trim the values that dont appear in this interval)
Ping(1)
stream = [ 1 ] 
Ping(100)
stream = [ 1, 100 ] 
ping(3001)
stream = [ 1, 100, 3001 ]
ping(3002)
stream = [ 100, 3001, 3002 ] 
Return the stream's count after each call
var RecentCounter = function() {
    this.stream = []
};
*/

RecentCounter.prototype.ping = function(t) {
    this.stream.push(t) // Everytime we recieve a ping, add the time to the stream of integers
  /*
  To exclude the times that are not included within the range of t - 3000,
  we remove the first element from the stream while it is less than the calculated range 
  */
    while(this.stream[0] < t - 3000){ 
      this.stream.shift()
  } 
    // When the loop ends the length of calls will be the length of the array
    return this.stream.length
};