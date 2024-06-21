# options
CC=clang
CFLAGS=-W -Wall -g
TARGET=bin/program

# globs
SRCS := $(wildcard source/*.c)
HDRS := $(wildcard source/*.h)
OBJS := $(patsubst source/%.c,bin/%.o,$(SRCS))

# link it all together
$(TARGET): $(OBJS) $(HDRS) makefile
	@mkdir -p bin
	$(CC) $(CFLAGS) $(OBJS) -o $(TARGET)

# compile an object based on source and headers
bin/%.o: source/%.c $(HDRS) makefile
	@mkdir -p bin
	$(CC) $(CFLAGS) -c $< -o $@

# tidy up
clean:
	rm -f $(TARGET) $(OBJS)
